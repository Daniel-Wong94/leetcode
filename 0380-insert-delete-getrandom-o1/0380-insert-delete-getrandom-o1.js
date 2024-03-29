
var RandomizedSet = function() {
    this.map = {} // val : index 
    this.nums = []  // keeps track of index
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (this.map.hasOwnProperty(val)) return false
    
    this.map[val] = this.nums.length
    this.nums.push(val)
    
    return true
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (!this.map.hasOwnProperty(val)) return false
    
    // use map to access index of removal at O(1)
    const lastIdx = this.nums.length - 1
    const removeIdx = this.map[val]
    
    // remove the value by replacing it with the last element
    this.nums[removeIdx] = this.nums[lastIdx]
    
    // update map - last element in array has new position at removeIdx
    this.map[this.nums[lastIdx]] = removeIdx
    
    // remove the last element from nums, and delete from map
    this.nums.pop()
    delete this.map[val]
    
    return true
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    const randomIdx = Math.floor(Math.random() * this.nums.length)
    return this.nums[randomIdx]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */