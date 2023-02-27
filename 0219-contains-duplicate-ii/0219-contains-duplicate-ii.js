/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const tracker = {}
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]  
        if (tracker.hasOwnProperty(num) && Math.abs(i - tracker[num]) <= k) {
            return true
        }
            
        tracker[num] = i
        
    }
        
    return false
};