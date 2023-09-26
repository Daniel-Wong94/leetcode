/**
 * @param {number[]} nums
 */
// brute force: O(n) to linearly add up
// better: trade space for speed by using hash for every possible (O(n^2)) pairs
// optimize: O(1) create a running sum array 
var NumArray = function(nums) {
    this.sums = [0]
    
    let runningSum = 0
    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i]
        this.sums.push(runningSum)
    }
    
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function(left, right) {
    return this.sums[right + 1] - this.sums[left]
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */