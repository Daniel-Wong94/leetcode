/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    const graph = buildGraph(numCourses, prerequisites)  
    const visited = new Set()
    const visiting = new Set()

    for (const course in graph) {
      if (hasCycle(graph, course, visited, visiting)) {
          return false
      }
    }
    
    return true
};

const hasCycle = (graph, course, visited, visiting) => {
    if (visited.has(course)) return false
    if (visiting.has(course)) return true
    
    visiting.add(course)
    
    for (const neighbor of graph[course]) {
        if (hasCycle(graph, neighbor, visited, visiting)) {
            return true
        }
    }
    
    visiting.delete(course)
    visited.add(course)
    
    return false
}

const buildGraph = (numCourses, prereqs) => {
    const graph = {}
    
    for (let i = 0; i < numCourses; i++) {
        graph[i] = []
    }
    
    for (const [a, b] of prereqs) {
        graph[a].push(b)
    }
    
    return graph;
}