/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const seen = {}
    
    for (const char of nums) {
        if (!seen[char]) {
            seen[char] = 1;
        } else {
            return true
        }
    }
    
    return false;
};