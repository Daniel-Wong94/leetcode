/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {number} m
 * @param {number} n
 * @param {ListNode} head
 * @return {number[][]}
 */

// ROW = M, COL = N
var spiralMatrix = function(m, n, head) {
    const matrix = []
    
    // initiate matrix with -1
    for (let i = 0; i < m; i++) {
        matrix.push(Array(n).fill(-1))
    }
    
    let i = j = 0;
    let current = head
    let direction = "right"
    
    while (current) {
        console.log(i, j)
        matrix[i][j] = current.val
        
        if ((j === n - 1 || matrix[i][j + 1] !== - 1) && direction === "right") direction = "down"
        else if ((j === 0 || matrix[i][j - 1] !== -1)&& direction === "left") direction = "up"
        else if ((i === m - 1 || matrix[i + 1][j] !== -1) && direction === "down") direction = "left"
        else if ((i === 0 || matrix[i - 1][j] !== -1) && direction === "left") direction = "up"
        else if ((i === 0 || matrix[i - 1][j] !== -1) && direction === "up") direction = "right"
        
        if (i === 2 && j === 0) console.log(matrix)
        
        if (direction === "right") {
            j++
        } else if (direction === "left") {
            j--
        } else if (direction === "up") {
            i--
        } else {
            i++
        }
        
        current = current.next
    }
    
    return matrix;
};