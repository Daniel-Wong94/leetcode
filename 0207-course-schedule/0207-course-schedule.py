class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        graph = self.build_graph(numCourses, prerequisites)
        visited = set()
        visiting = set()
        
        for course in graph:
            if self.has_cycle(graph, course, visited, visiting) == True:
                return False
            
        return True
    
    def has_cycle(self, graph: dict, course: int, visited: set, visiting: set) -> bool:
        if course in visited:
            return False
        if course in visiting:
            return True
        
        visiting.add(course)
        
        for neighbor in graph[course]:
            if self.has_cycle(graph, neighbor, visited, visiting) == True:
                return True
            
        visiting.remove(course)
        visited.add(course)
        
        return False
        
        
    def build_graph(self, numCourses: int, prerequisites: List[List[int]]) -> dict:
        graph = { i:[] for i in range(numCourses) }
        
        for a, b in prerequisites:
            graph[a].append(b)
            
        return graph
        