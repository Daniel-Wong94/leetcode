/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    let nums = new Set(arr)
    let counter = 0
    let num = 1
    
    while (true) {
        if (!nums.has(num)) counter++
        if (counter === k) return num
        num++
    }
};