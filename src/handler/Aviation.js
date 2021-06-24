var unirest = require("unirest");


const AirportPerIata = (iata, callback) => {

  var req = unirest("GET", "https://airport-info.p.rapidapi.com/airport");

  req.query({
    "iata": `${iata}`
  });

  req.headers({
    "x-rapidapi-key": "decbc3b3d7msh2a275583ac282a6p124ac3jsn7cb0388c8ab4",
    "x-rapidapi-host": "airport-info.p.rapidapi.com",
    "useQueryString": true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    const apiResponse = res.body;
    if (typeof callback == "function")
      callback(apiResponse);
  });

}


const Departures = (origin) => {

  console.log(`${origin} is your departure airport`)

  return unirest
    .get("http://api.aviationstack.com/v1/flights")
    .query({
      "access_key": "5bb0bc48d3c00ceef1857a3bacd30937",
      "flight_status": "scheduled",
      "dep_iata": `${origin}`
    })
    .then((res) => {
      const apiResponse = res.body.data;
      return apiResponse
    })
    .catch((error) =>{
      throw new Error(error)
    }) 
}


const Distance = (flight) => {
  var departure = parseInt((new Date(flight.departure.estimated).getTime() / 1000).toFixed(0));
  var arrival = parseInt((new Date(flight.arrival.estimated).getTime() / 1000).toFixed(0));
  var flight_time = (arrival - departure) / 3600;
  const average_speed = 750;
  return flight_time * average_speed
}


const Countries = (callback) => {

  var req = unirest("GET", "https://restcountries.eu/rest/v2/all");

  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    const apiResponse = res.body;
    apiResponse.forEach(country => {
      if (typeof callback == "function")
        callback(country.name);
    });
  });
}


const CountryCode = (country, callback) => {

  var req = unirest("GET", "https://ourairport-data-search.p.rapidapi.com/country/" + `${country}`);

  req.headers({
    "x-rapidapi-key": "decbc3b3d7msh2a275583ac282a6p124ac3jsn7cb0388c8ab4",
    "x-rapidapi-host": "ourairport-data-search.p.rapidapi.com",
    "useQueryString": true
  });

  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    var apiResponse = res.body
    if (apiResponse.results.length == 0)
      return "invalid";
    if (typeof callback == "function")
      callback(apiResponse.results[0].code);
  });

}

const AirportPerCountry = (code, callback) => {
  var req = unirest("GET", "https://ourairport-data-search.p.rapidapi.com/airports-in/" + `${code}/${code}`);

  req.query({
    "expand": "true"
  });

  req.headers({
    "x-rapidapi-key": "decbc3b3d7msh2a275583ac282a6p124ac3jsn7cb0388c8ab4",
    "x-rapidapi-host": "ourairport-data-search.p.rapidapi.com",
    "useQueryString": true
  });
  req.end(function (res) {
    if (res.error) throw new Error(res.error);
    var apiResponse = res.body
    if (apiResponse.results.length == 0)
      return "None";
    apiResponse = res.body.results;
    apiResponse.forEach(airport => {
      if (typeof callback == "function")
        callback(airport.iata);
    });
  });

}


module.exports = { AirportPerCountry, AirportPerIata, Departures, Distance, CountryCode, Countries }

