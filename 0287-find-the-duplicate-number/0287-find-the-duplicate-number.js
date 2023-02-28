/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let count = 0
    let index = nums[0]
    
    while (count < nums.length) {
        [nums[index], index] = [index, nums[index]]
        
        if (nums[index] === index) return index;
        
        count++
    }

};
