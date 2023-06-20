/**
 * @param {number[]} nums
 * @return {number}
 */

// brute force O(n^2)
// for each num, sum up all the num after it
// const maxSubArray = nums => {
//     let maxSubArray = -Infinity
    
//     for (let i = 0; i < nums.length; i++) {
//         let currMax = 0
        
//         for (let j = i; j < nums.length; j++) {
//             currMax += nums[j]
//             maxSubArray = Math.max(maxSubArray, currMax)
//         }
//     }
    
//     return maxSubArray
// }

// optimized O(n)
// restart the curr subarray whenever num is negative
var maxSubArray = function(nums) {
    let currSubArray = nums[0]
    let maxSubArray = nums[0]
    
    for (let i = 1; i < nums.length; i++) {
        const num = nums[i]
        currSubArray = Math.max(num, currSubArray + num)
        maxSubArray = Math.max(maxSubArray, currSubArray)
    }
    
    return maxSubArray
};