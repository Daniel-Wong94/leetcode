/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const counter = {}
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        if (!counter.hasOwnProperty(num)) counter[num] = i
        else {
            if (Math.abs(i - counter[num]) <= k) {
                return true
            }
            counter[num] = i
        }
    }
        
    return false
};