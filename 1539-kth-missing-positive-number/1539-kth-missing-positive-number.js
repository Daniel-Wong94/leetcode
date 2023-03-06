/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
    /*
        maintain k pointed to the kth missing number (starts at k)
        if arr[i] <= k, that means we know one number before k is checked off, so increment k to maintain its kth position
        once arr[i] > k, that means k has landed on the kth missing number
    */
    let i = 0
    
    while (arr[i] <= k + i) {
        i++
    }
    
    return i + k
};