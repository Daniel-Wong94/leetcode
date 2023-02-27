/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    const lastIndexOf = {}
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]  
        
        if (lastIndexOf.hasOwnProperty(num) && Math.abs(i - lastIndexOf[num]) <= k) {
            return true
        }
            
        lastIndexOf[num] = i
    }
        
    return false
};