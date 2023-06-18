/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let result = 0
    
    for (let col = 0; col < strs[0].length; col++) {
        for (let row = 1; row < strs.length; row++) {
            if (strs[row][col] < strs[row - 1][col]) {
                result++
                break;
            }
        }
    }
    
    return result
};