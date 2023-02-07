/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // count the number of zeros
    // for each 0, splice() and push() to the back of the array
    let countOfZeroes = 0;
    
    for (const num of nums) {
        if (num === 0) countOfZeroes++
    }
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
           const zero = nums.splice(i, 1);
           nums.push(zero);
           i--;
        }
    }
    
    return nums;
};