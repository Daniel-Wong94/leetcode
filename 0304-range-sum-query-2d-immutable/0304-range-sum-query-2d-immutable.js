/**
 * @param {number[][]} matrix
 */
var NumMatrix = function(matrix) {
    this.sumMat = []
    
    for (let i = 0; i <= matrix.length; i++) {
        if (i === 0) {
            this.sumMat[i] = new Array(matrix[0].length + 1).fill(0)
        } else {
            this.sumMat[i] = [0]
        }
    }
    
    for (let row = 0; row < matrix.length; row++) {
        let prefixSum = 0
        for (let col = 0; col < matrix[0].length; col++){
            prefixSum += matrix[row][col]
            const prefixAbove = this.sumMat[row][col + 1]
            this.sumMat[row + 1][col + 1] = prefixSum + prefixAbove
        }
    }
};

/** 
 * @param {number} row1 
 * @param {number} col1 
 * @param {number} row2 
 * @param {number} col2
 * @return {number}
 */
NumMatrix.prototype.sumRegion = function(row1, col1, row2, col2) {
    const [r1, c1, r2, c2] = [row1 + 1, col1 + 1, row2 + 1, col2 + 1]
    const bottomRight = this.sumMat[r2][c2]
    const topRow = this.sumMat[r1 - 1][c2]
    const leftCol = this.sumMat[r2][c1 - 1]
    const topLeft = this.sumMat[r1 - 1][c1 - 1]
    
    return bottomRight - topRow - leftCol + topLeft
};

/** 
 * Your NumMatrix object will be instantiated and called as such:
 * var obj = new NumMatrix(matrix)
 * var param_1 = obj.sumRegion(row1,col1,row2,col2)
 */