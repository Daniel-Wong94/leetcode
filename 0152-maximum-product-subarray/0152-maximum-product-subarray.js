/**
 * @param {number[]} nums
 * @return {number}
 */
// var maxProduct = function(nums) {
//     if (nums.length === 0) return 0
//     let max = nums[0]
    
//     for (let i = 0; i < nums.length; i++) {
//         let curr = 1
//         for (let j = i; j < nums.length; j++) {
//             curr *= nums[j]
//             max = Math.max(max, curr)
//         }
//     }
    
//     return max
// };

const maxProduct = nums => {
    // edge case: empty nums array
    if (nums.length === 0) return 0
    
    let currMax = nums[0]
    let currMin = nums[0]
    let result = currMax
    
    for (let i = 1; i < nums.length; i++) {
        const curr = nums[i]
        
        // curr is chosen if the accumalation is horrible compared to curr
        // currMax will be chosen if subarray has been just positive numbers
        // currMin will be chosen if a negative number is accumalated twice
        const tempMax = Math.max(curr, currMax * curr, currMin * curr)
        currMin = Math.min(curr, currMax * curr, currMin * curr)
        
        currMax = tempMax
        
        // update the highest score after each iteration
        result = Math.max(currMax, result)
    }
    
    return result
}