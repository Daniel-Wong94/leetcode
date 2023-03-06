/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let i = 0
    
    while (arr[i] <= k + i) {
        i++
    }
    
    return i + k
};