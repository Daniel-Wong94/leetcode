/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */

// keep track of the frequency
// greedy method: keep removing from the least frequency first
// return the number of keys that don't have a value of 0
var findLeastNumOfUniqueInts = function(arr, k) {
    const freq = {}
    
    for (const num of arr) {
        freq[num] = freq[num] + 1 || 1
    }
    
    const val = Object.values(freq).sort((a, b) => a - b)
    let deletes = 0
    let i = 0
    
    while (k > 0) {
        if (val[i] <= k) {
            deletes++
            k -= val[i]
        } else {
            break;
        }
        i++
    }
    
    return val.length - deletes
};