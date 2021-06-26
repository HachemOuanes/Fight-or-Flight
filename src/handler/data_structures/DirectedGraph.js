const { MinPriorityQueue } = require('datastructures-js');

class DirectedGraph {
    constructor() {
        this._vertices = new Map();
        this._edges = new Map();
        this._edgesCount = 0;
    }


    addVertex(key, value) {
        this._vertices.set(key, value);
        if (!this._edges.has(key)) {
            this._edges.set(key, new Map());
        }
        return this;
    }


    hasVertex(key) {
        return this._vertices.has(key);
    }


    removeVertex(key) {
        if (!this.hasVertex(key)) return false;

        this.removeEdges(key);
        this._edges.delete(key);
        this._vertices.delete(key);
        return true;
    }


    getVerticesCount() {
        return this._vertices.size;
    }


    addEdge(srcKey, destKey, weight) {
        if (!this._vertices.has(srcKey)) {
            throw new Error(`addEdge: vertex "${srcKey}" not found`);
        }

        if (!this._vertices.has(destKey)) {
            throw new Error(`addEdge: vertex "${destKey}" not found`);
        }

        if (weight && Number.isNaN(+weight)) {
            throw new Error('addEdge: expects a numberic weight');
        }

        const w = Number.isNaN(+weight) ? 1 : +weight;
        this._edges.get(srcKey).set(destKey, w);
        this._edgesCount += 1;
        return this;
    }


    hasEdge(srcKey, destKey) {
        return this.hasVertex(srcKey)
            && this.hasVertex(destKey)
            && this._edges.get(srcKey).has(destKey);
    }


    getWeight(srcKey, destKey) {
        if (this.hasVertex(srcKey) && srcKey === destKey) {
            return 0;
        }

        if (!this.hasEdge(srcKey, destKey)) {
            return Infinity;
        }

        return this._edges.get(srcKey).get(destKey);
    }


    removeEdge(srcKey, destKey) {
        if (!this.hasEdge(srcKey, destKey)) {
            return false;
        }

        this._edges.get(srcKey).delete(destKey);
        this._edgesCount -= 1;
        return true;
    }


    removeEdges(key) {
        if (!this.hasVertex(key)) {
            return 0;
        }

        let removedEdgesCount = 0;
        this._edges.forEach((destEdges, srcKey) => {
            if (destEdges.has(key)) {
                this.removeEdge(srcKey, key);
                removedEdgesCount += 1;
            }
        });

        removedEdgesCount += this._edges.get(key).size;
        this._edgesCount -= this._edges.get(key).size;
        this._edges.set(key, new Map());
        return removedEdgesCount;
    }


    getEdgesCount() {
        return this._edgesCount;
    }

    clear() {
        this._vertices = new Map();
        this._edges = new Map();
        this._edgesCount = 0;
    }

    dijkstra(startKey) {
        const queue = new MinPriorityQueue();
        var distance = new Map();
        var previous = new Map();
        distance.set(startKey, 0);
        this._vertices.forEach((value, key) => {
            if (startKey !== key) distance.set(key, Infinity);
            previous.set(key, null);
        });
        queue.enqueue(startKey, 0);
        while (!queue.isEmpty()) {
            let data = queue.dequeue();
            let currentKey = data.element;
            let weight = data.priority;
            this._edges.get(currentKey).forEach((value, key) => {
                let alt = distance.get(currentKey) + value;
                if (alt < distance.get(key)) {
                    distance.set(key, alt);
                    previous.set(key, currentKey);
                    queue.enqueue(key, distance.get(key));
                }
            });
        }
        return { distance, previous }; 
    }
}


exports.DirectedGraph = DirectedGraph;
