import React, { useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

function Map({ drones , selectedDrone, onSelectDrone }) {
  const mapRef = useRef(null);
  const mapContainerRef = useRef(null);
  const markersRef = useRef({}); // store Mapbox markers by drone serial

  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoibW9oYW1tYWQyM2FsdGlsbCIsImEiOiJjbWVzb3dnZ2UwM2YyMmtzZzBtcGs4MDQzIn0.1d7BKDK5gV3BAnWuQLKbmQ';

    mapRef.current = new mapboxgl.Map({
      container: mapContainerRef.current,
      center: [35.9304, 31.9632], // default center
      zoom: 6,
      style: 'mapbox://styles/mapbox/dark-v11',
    });

    return () => {
      mapRef.current.remove();
    };
  }, []);

  // Update markers whenever drones array changes
  useEffect(() => {
    if (!mapRef.current) return;

    drones.forEach((drone) => {
      if (!drone.coordinates) return;

      const { serial_no, name, pilot_name, org_name, status, coordinates } = drone;

      // If marker exists, just update position
      if (markersRef.current[serial_no]) {
        markersRef.current[serial_no].setLngLat(coordinates);
        return;
      }

      // Create popup
      const popup = new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <strong>${name}</strong><br/>
        Serial: ${serial_no}<br/>
        Pilot: ${pilot_name}<br/>
        Org: ${org_name}<br/>
        Status: ${status}
      `);

      // Create marker element
      const el = document.createElement('img');
      el.src = '/Icon/drone.svg';
      el.className = `w-8 h-8 rounded-full ${
        status === 'online' ? 'bg-green-500' : 'bg-red-500'
      } p-1`;

      el.onclick = () => {
        onSelectDrone(drone); // Notify parent of selection
      };

      // Create marker and store it
      const marker = new mapboxgl.Marker({ element: el })
        .setLngLat(coordinates)
        .setPopup(popup)
        .addTo(mapRef.current);

      markersRef.current[serial_no] = marker;
    });
  }, [drones]);

  useEffect(() => {
    if (selectedDrone && mapRef.current) {
      mapRef.current.flyTo({
        center: selectedDrone.coordinates,
        zoom: 15,
        essential: true,
      });
    }
  }, [selectedDrone]);

  return <div ref={mapContainerRef} className="w-full h-screen" />;
}

export default Map;
