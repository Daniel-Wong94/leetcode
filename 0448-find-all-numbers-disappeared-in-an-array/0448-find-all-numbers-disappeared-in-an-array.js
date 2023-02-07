/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    const counter = {}
    const result = [];
    
    for (let i = 1; i <= nums.length; i++) {
        counter[i] = false;
    }
    
    for (const num of nums) {
        counter[num] = true
    }
    
    for (const num in counter) {
        if (!counter[num]) {
            result.push(num)
        }
    }
    
    return result;
};