/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(matrix, k) {
    const nums = []
    
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            nums.push(matrix[i][j])
        }
    }
    
    nums.sort((a, b) => a - b)
    
    return nums[k - 1]
};