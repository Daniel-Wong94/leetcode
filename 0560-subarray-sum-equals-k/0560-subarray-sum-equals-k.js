/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// TLE: O(n^2)
// var subarraySum = function(nums, k) {
//     let count = 0
    
//     for (let i = 0; i < nums.length; i++) {
//         for (let j = i + 1; j <= nums.length; j++) {
//             let total = 0
            
//             for (let start = i; start < j; start++) {
//                 total += nums[start]
//             }
            
//             if (total === k) count++
            
//         }
//     }
    
//     return count;
// };

// keep track of a running sum and frequency of previous running sums
// at any point, index i of nums, you have a valid subarray
// if there's a previous running sum of prefixSum[j] - k
const subarraySum = (nums, k) => {
    // edge case: when num itself is k
    const freq = {0: 1}
    
    let prefixSum = 0
    let count = 0
    
    for (const num of nums) {
        // update running sum
        prefixSum += num
        
        const complement = prefixSum - k
        
        // if there's been a running sum before, add the frequency of it to count
        count += freq[complement] || 0
        
        // update hashmap
        freq[prefixSum] = freq[prefixSum] + 1 || 1
    }

    return count
}