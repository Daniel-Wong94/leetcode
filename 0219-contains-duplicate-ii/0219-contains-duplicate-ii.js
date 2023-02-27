/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const prevIndexOf = {}
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]  
        
        if (prevIndexOf.hasOwnProperty(num) && Math.abs(i - prevIndexOf[num]) <= k) {
            return true
        }
            
        prevIndexOf[num] = i
    }
        
    return false
};