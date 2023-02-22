/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const result = []
    
    for (let i = 0; i < numRows; i++) {
        const current = Array(i + 1)
        
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) current[j] = 1
            else {
                current[j] = result[i - 1][j - 1] + result[i - 1][j]
            }
        }
        
        result.push(current)
    }
    
    return result;
};