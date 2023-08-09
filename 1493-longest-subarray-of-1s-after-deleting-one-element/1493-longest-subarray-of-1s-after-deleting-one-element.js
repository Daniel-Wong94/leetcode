/**
 * @param {number[]} nums
 * @return {number}
 */

// create a window that expands up to allowing one 0
// shrink the window from the left when more than one 0 is present within it
// keep track of max window width
var longestSubarray = function(nums) {
    let left = 0
    let zeroCount = 0
    let longest = 0
    
    for (let right = 0; right < nums.length; right++) {
        if (nums[right] === 0) zeroCount++

        while (zeroCount > 1) {
            if (nums[left] === 0) zeroCount--
            left++
        }
        
        longest = Math.max(longest, right - left)
    }
    
    return longest
};