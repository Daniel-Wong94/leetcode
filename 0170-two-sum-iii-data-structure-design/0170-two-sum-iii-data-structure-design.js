
var TwoSum = function() {
    this.nums = {}
};

/** 
 * @param {number} number
 * @return {void}
 */
TwoSum.prototype.add = function(number) {
    this.nums[number] = this.nums[number] + 1 || 1
};

/** 
 * @param {number} value
 * @return {boolean}
 */
TwoSum.prototype.find = function(value) {
    for (const num in this.nums) {
        const target = value - num
        if (target != num) {
            if (this.nums.hasOwnProperty(target)) return true
        } else if (this.nums[target] > 1) return true
    }
    
    return false;
};

/** 
 * Your TwoSum object will be instantiated and called as such:
 * var obj = new TwoSum()
 * obj.add(number)
 * var param_2 = obj.find(value)
 */