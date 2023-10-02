"""
    Get two sets, one for pacific and one for atlantic
    BFS from oceans to larger island (reversed conditions) and store into respective set
    Return the intersection of the two sets
"""
from collections import deque

class Solution:
    def pacificAtlantic(self, heights: List[List[int]]) -> List[List[int]]:
        pacific = set()
        atlantic = set()

        # bfs search the pacific nodes
        pacific_queue = deque([])
        for row in range(len(heights)):
            for col in range(len(heights[row])):
                if row == 0 or col == 0:
                    pacific_queue.append((row, col))

        while pacific_queue:
            row, col = pacific_queue.popleft()
            if (row, col) in pacific:
                continue
            pacific.add((row, col))
            deltas = [(0, 1), (0, -1), (1, 0), (-1, 0)]
            for dX, dY in deltas:
                neighbor_x, neighbor_y = dX + row, dY + col
                if 0 <= neighbor_x < len(heights) and 0 <= neighbor_y < len(heights[0]):
                    if heights[row][col] <= heights[neighbor_x][neighbor_y]:
                        pacific_queue.append((neighbor_x, neighbor_y))
        
        # bfs search the atlantic nodes
        atlantic_queue = deque([])
        for row in range(len(heights)):
            for col in range(len(heights[row])):
                if row == len(heights) - 1 or col == len(heights[0]) - 1:
                    atlantic_queue.append((row, col))

        while atlantic_queue:
            row, col = atlantic_queue.popleft()
            if (row, col) in atlantic:
                continue
            atlantic.add((row, col))
            deltas = [(0, 1), (0, -1), (1, 0), (-1, 0)]
            for dX, dY in deltas:
                neighbor_x, neighbor_y = dX + row, dY + col
                if 0 <= neighbor_x < len(heights) and 0 <= neighbor_y < len(heights[0]):
                    if heights[row][col] <= heights[neighbor_x][neighbor_y]:
                        atlantic_queue.append((neighbor_x, neighbor_y))
        print(atlantic, pacific)
        return list(pacific.intersection(atlantic))