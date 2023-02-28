/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let count = 0
    let index = nums[0]
    
    while (count < nums.length) {
        // swap
        let temp = nums[index]
        nums[index] = index
        index = temp
        if (nums[index] === index) return index;
        
        count++
    }

};