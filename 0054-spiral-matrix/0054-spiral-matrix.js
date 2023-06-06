/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const totalElements = matrix.length * matrix[0].length
    const visited = new Set()
    const deltas = [[0, 1], [1, 0], [0, -1], [-1, 0]]
    const result = []
    let row = col = direction = 0;
    
    while (result.length < totalElements) {
        const pos = row + "," + col
        if (!visited.has(pos)) result.push(matrix[row][col])
        visited.add(pos)     
        
        const [deltaRow, deltaCol] = deltas[direction % 4]
        const [nextRow, nextCol] = [row + deltaRow, col + deltaCol]

        const nextPos = nextRow + "," + nextCol
        
        if (inBounds(nextRow, nextCol, matrix) && !visited.has(nextPos)) {
            row = nextRow
            col = nextCol 
        } else {
            direction++
        }
    }
    
    return result;
};

const inBounds = (row, col, matrix) => {
    const inRow = 0 <= row && row < matrix.length
    const inCol = 0 <= col && col < matrix[0].length
    
    return inRow && inCol
}