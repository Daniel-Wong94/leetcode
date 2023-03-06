/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
// var findKthPositive = function(arr, k) {
//     /*
//         maintain k pointed to the kth missing number (starts at k)
//         if arr[i] <= k, that means we know one number before k is checked off, so increment k to maintain its kth position
//         once arr[i] > k, that means k has landed on the kth missing number
//     */
//     let i = 0
    
//     while (arr[i] <= k + i) {
//         i++
//     }
    
//     return i + k
// };

// const findKthPositive = (arr, k , i = 0) => {
//     if (arr[i] > k || i === arr.length) return k
//     return findKthPositive(arr, k + 1, i + 1)
// }

const findKthPositive = (arr, k) => {
    // binary search, the indicator will be the number of missing elements at index mid
    let left = 0
    let right = arr.length - 1
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        
        // formula to get number of missing elements
        let numOfMissing = arr[mid] - (mid + 1)
        
        if (numOfMissing < k) {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return left + k
}