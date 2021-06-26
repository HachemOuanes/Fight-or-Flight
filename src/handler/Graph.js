var unirest = require("unirest");

const { DirectedGraph } = require('./data_structures/DirectedGraph');
const { Stack } = require('@datastructures-js/stack');
const { AirportPerCountry, AirportPerIata, Departures, Distance, CountryCode, Countries } = require('./Aviation')



var graph = new DirectedGraph();

// graph.addVertex("A", "");
// graph.addVertex("B", "");
// graph.addVertex("C", "");
// graph.addVertex("D", "");
// graph.addVertex("E", "");
// graph.addVertex("F", "");
// graph.addVertex("G", "");

// graph.addEdge("A", "C", 100);
// graph.addEdge("A", "B", 3);
// graph.addEdge("A", "D", 4);
// graph.addEdge("D", "C", 3);
// graph.addEdge("D", "E", 8);
// graph.addEdge("E", "F", 10);
// graph.addEdge("B", "G", 9);
// graph.addEdge("E", "G", 50);

// console.log(graph); 

function shortestPath(start, end) {
    output = { distance, previous } = graph.dijkstra(start);
    var temp = end;
    var stack = new Stack();
    stack.push(temp);
    while ((temp !== null) && (temp !== start)) {
        previous.forEach((value, key) => {
            if (key === temp) {
                stack.push(value)
                temp = value;
            }
        });
    }
    while (!stack.isEmpty()) {
        console.log(stack.pop());
    }
}



function Create(departure_iata) {
    graph.addVertex(departure_iata, "");
    return Departures(departure_iata)
        .then((response) => {
            response.forEach(flight => {
                var arrival_iata = flight.arrival.iata;
                var distance = Distance(flight);
                graph.addVertex(arrival_iata, "");
                graph.addEdge(departure_iata, arrival_iata, distance);
            })

            return graph
        })
        .catch((error) => {
            throw new Error(error)
        })
}






Create("TUN")
.then(graph => {
    console.log(graph);
})




// console.log(graph);



// airportperiata parameters = location / name / iata / icao / phone / latitude / longitude



