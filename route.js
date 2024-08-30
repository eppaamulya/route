const tickets = [
    ['Paris', 'Skopje'],
    ['Zurich', 'Amsterdam'],
    ['Prague', 'Zurich'],
    ['Barcelona', 'Berlin'],
    ['Kiev', 'Prague'],
    ['Skopje', 'Paris'],
    ['Amsterdam', 'Barcelona'],
    ['Berlin', 'Kiev'],
    ['Berlin', 'Amsterdam']
];
const startingCity = 'Kiev';


const buildGraph = (tickets) => {
    const graph = {};
    tickets.forEach(([from, to]) => {
        if (!graph[from]) {
            graph[from] = [];
        }
        graph[from].push(to);
    });
    return graph;
};

const findRoute = (graph, currentCity, visitedCities) => {
    visitedCities.push(currentCity);
    const destinations = graph[currentCity] || [];

    for (let destination of destinations) {
        if (!visitedCities.includes(destination)) {
            findRoute(graph, destination, visitedCities);
        }
    }
};


const graph = buildGraph(tickets);
const visitedCities = [];
findRoute(graph, startingCity, visitedCities);


console.log(visitedCities);
