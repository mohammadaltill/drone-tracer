import React, { useState, useRef, useEffect } from "react";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import DronList from "../components/DronList";
import Map from "../components/Map";
import { io } from "socket.io-client";
import '../src/App.css'

function MapPage() {
  const [drones, setDrones] = useState([]);
  const [selectedDrone, setSelectedDrone] = useState(null); // <-- shared state
  const socketRef = useRef(null);
  const dronesRef = useRef({});

  useEffect(() => {
    socketRef.current = io("http://localhost:9013", { transports: ["polling"] });

    socketRef.current.on("message", (geojson) => {
      if (!geojson.features?.length) return;

      const drone = geojson.features[0];
      const serial = drone.properties.serial;

      const registration = drone.properties.registration; // e.g., "SG-BA"
      const secondPart = registration.split("-")[1]; // "BA"
      const canFly = secondPart.startsWith("B");
      const drone_status = canFly ? "online" : "offline";

      dronesRef.current[serial] = {
        serial_no: serial,
        registraion_no: drone.properties.registration,
        name: drone.properties.Name,
        pilot_name: drone.properties.pilot,
        org_name: drone.properties.organization,
        status: drone_status,
        coordinates: drone.geometry.coordinates,
        altitude: drone.properties.altitude,
        yaw: drone.properties.yaw,
      };

      setDrones(Object.values(dronesRef.current));
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  return (
    <div className="w-screen h-screen flex flex-col overflow-hidden">
      <div className="flex flex-col w-full h-full container">
        <Header />
        <div className="flex flex-row w-full h-full">
          <SideBar />
          <DronList
            drones={drones}
            selectedDrone={selectedDrone}
            onSelectDrone={setSelectedDrone} // <-- pass handler
          />
          <Map
            drones={drones}
            selectedDrone={selectedDrone}
            onSelectDrone={setSelectedDrone} // <-- pass handler
          />
        </div>
      </div>
    </div>
  );
}

export default MapPage;
