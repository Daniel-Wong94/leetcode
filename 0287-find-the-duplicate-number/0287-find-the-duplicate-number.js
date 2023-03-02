/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
    let slow = fast = result = nums[0]
    
    while (true) {
        slow = nums[slow]
        fast = nums[nums[fast]]
        if (slow === fast) break;
    }
    
    while (result !== slow) {
        result = nums[result]
        slow = nums[slow]
    }

    return result
};
