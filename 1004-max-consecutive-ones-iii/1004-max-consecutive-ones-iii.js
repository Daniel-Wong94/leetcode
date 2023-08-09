/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// create window
// keep track up the number of 0 in window
// keep the streak as long as the num of 0 is <= k
// move the left window to maintain 0  count <= k
var longestOnes = function(nums, k) {
    let left = 0
    let max = 0
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) k--

        while (k < 0) {
            if (nums[left] === 0) k++
            left++
        }
        
        max = Math.max(max, right - left + 1)    
    }
    
    return max
};