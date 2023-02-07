/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const unique = new Set(nums)
    const result = [];
    
    for (let i = 1; i <= nums.length; i++) {
        if (!unique.has(i)) {
            result.push(i)
        }
    }
    
    return result;
};