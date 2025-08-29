import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import CustomRadioGroup from "./CustomRadioGroup";

function DronList({ drones, selectedDrone, onSelectDrone }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("drones");

  const tabs = [
    { label: "Drones", value: "drones" },
    { label: "Flights History", value: "flights" },
  ];

  

  return (
    <div
      className={`md:w-92 w-full ${isOpen ? "h-[90%]" : "h-16"} 
        bg-secondary z-[20] py-4 fixed flex flex-col
        bottom-0 md:left-34 transition-all duration-300 ease-in-out overflow-y-auto scroll-hide`}
    >
      {/* header toggle */}
      <div
        className="flex flex-row justify-between cursor-pointer items-center pb-10 px-4 "
        onClick={() => setIsOpen(!isOpen)}
      >
        <label className="text-accent text-3xl font-bold">Drone Flying</label>
        <IoIosArrowDown
          className={`w-8 h-8 text-accent ${
            isOpen ? "rotate-[180deg]" : ""
          } transition-all duration-300`}
        />
      </div>

      {/* tabs */}
      <CustomRadioGroup
        options={tabs}
        onChange={(val) => setActiveTab(val)}
        otherStyles="mb-4 px-4"
      />

      {/* drone list */}
      {drones.map((drone, index) => (
        <div
          key={index}
          onClick={() => onSelectDrone(drone)} // 🔹 notify parent when clicked
          className={`flex flex-col py-4 px-6 w-full h-auto hover:bg-focus cursor-pointer duration-300 
            ${
              selectedDrone?.serial_no === drone.serial_no
                ? "bg-focus"
                : ""
            }`} // 🔹 highlight if selected
        >

          <label className="text-accent text-xl font-bold">{drone.name}</label>

          <div className="grid grid-cols-3 gap-4">
            <div className="flex flex-col">
              <label className="text-accent text-sm font-bold">Serial #</label>
              <label className="text-neutral text-sm">{drone.serial_no}</label>
            </div>

            <div className="flex flex-col">
              <label className="text-accent text-sm font-bold">
                Registration #
              </label>
              <label className="text-neutral text-sm">
                {drone.registraion_no}
              </label>
            </div>

            <div
              className={`flex h-6 w-6 rounded-full border-1 border-accent ${
                drone.status === "online" ? "bg-success" : "bg-error"
              }`}
            ></div>

            <div className="flex flex-col">
              <label className="text-accent text-sm font-bold">Pilot Name</label>
              <label className="text-neutral text-sm">{drone.pilot_name}</label>
            </div>

            <div className="flex flex-col">
              <label className="text-accent text-sm font-bold">Organization</label>
              <label className="text-neutral text-sm">{drone.org_name}</label>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default DronList;
