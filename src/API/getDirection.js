import axios from "axios";

export default async function getDirection(startLon, startLat, endLon, endLat) {

    try {
        const TOKEN = "pk.eyJ1IjoibW9oYW1tYWQyM2FsdGlsbCIsImEiOiJjbWVzb3dnZ2UwM2YyMmtzZzBtcGs4MDQzIn0.1d7BKDK5gV3BAnWuQLKbmQ"
        const response = await axios.get(
            `https://api.mapbox.com/directions/v5/mapbox/driving/${startLon},${startLat};${endLon},${endLat}.json?geometries=geojson&access_token=${TOKEN}` 
        )
        return response.data
    } catch (error) {
        console.error("Error fetching directions:", error);
    }
}