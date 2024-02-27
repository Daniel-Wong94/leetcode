/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    let prev = {};
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (complement in prev) {
            return [prev[complement], i];
        } else {
            prev[nums[i]] = i;
        }
    }
};