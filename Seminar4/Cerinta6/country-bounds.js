import fetch from "node-fetch";
async function getCountryBounds(country) {
    const res = await fetch(`https://nominatim.openstreetmap.org/search?country=${country}&format=json`);
    const data = await res.json();
    return {
        minLatitude: parseFloat(data[0].boundingbox[0]),
        maxLatitude: parseFloat(data[0].boundingbox[1]),
        minLongitude: parseFloat(data[0].boundingbox[2]),
        maxLongitude: parseFloat(data[0].boundingbox[3])
    };
}
async function getPlanesOverRomania() {
    const bounds = await getCountryBounds("Romania");
    const url = "https://opensky-network.org/api/states/all";
    const res = await fetch(url);
    const data = await res.json();
    if (!Array.isArray(data.states)) {
      throw new Error("Data unavailable");
    }
    const planes = data.states.filter(state => {
        const lat = state[6]; 
        const lon = state[5]; 
        return lat >= bounds.minLatitude &&
               lat <= bounds.maxLatitude &&
               lon >= bounds.minLongitude &&
               lon <= bounds.maxLongitude;
    });

   return planes;
}

//Am ales sa le afisez doar pe primele 10, deoarece erau prea multe
getPlanesOverRomania()
    .then(flights => {
        console.log("Flights over Romania: ", flights.slice(0, 10));
    })
    .catch(err => console.log(err.message));