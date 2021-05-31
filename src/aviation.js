var unirest = require("unirest");

var req = unirest("GET", "https://airport-info.p.rapidapi.com/airport");

req.query({
	"iata": "CBD"
});

req.headers({
	"x-rapidapi-key": "decbc3b3d7msh2a275583ac282a6p124ac3jsn7cb0388c8ab4",
	"x-rapidapi-host": "airport-info.p.rapidapi.com",
	"useQueryString": true
});


req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});