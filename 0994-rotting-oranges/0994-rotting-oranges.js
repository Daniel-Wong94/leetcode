/**
 * @param {number[][]} grid
 * @return {number}
 */

var orangesRotting = function(grid) {
    // first iteration, track all rotten oranges and number of oranges
    let totalOranges = 0
    let totalRotten = 0    
    const queue = []
    
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const value = grid[row][col]
            
            if (value === 2) {
                queue.push([row, col, 1])
                totalRotten++
            }
            
            if (value !== 0) totalOranges++
        }
    }
    
    if (totalRotten === totalOranges) return 0;
        
    // perform BFS, if set.size === totalOranges, return true, return false if end of loop
    while (queue.length) {
        const [row, col, minute] = queue.shift()
        
        const neighbors = getNeighbors(row, col, grid)

        for (const [neighborRow, neighborCol] of neighbors) {
            if (grid[neighborRow][neighborCol] === 1) {
                grid[neighborRow][neighborCol] = 2
                totalRotten++
            }
            
            if (totalRotten === totalOranges) return minute
            
            queue.push([neighborRow, neighborCol, minute + 1])
        }
    }

    return -1
};

const getNeighbors = (row, col, grid, visited) => {
    const neighbors = []
    const deltas = [[0, 1], [0, -1], [1, 0], [-1, 0]]
    
    for (const [dX, dY] of deltas) {
        const [newRow, newCol] = [row + dX, col + dY]
        
        if (validNeighbor(newRow, newCol, grid)) {
            neighbors.push([newRow, newCol])
        }
    }
    
    return neighbors
}

const validNeighbor = (row, col, grid) => {
    const inRow = 0 <= row && row < grid.length
    const inCol = 0 <= col && col < grid[0].length
    
    return inRow && inCol && grid[row][col] === 1
}