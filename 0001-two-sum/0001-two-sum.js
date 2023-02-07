/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const result = []
    
    const sorted = nums.slice().sort((a, b) => a - b)
    
    let left = 0;
    let right = sorted.length - 1;
    
    while (left < right) {
        const sum = sorted[left] + sorted[right]
        
        if (sum > target) {
            right--;
        } else if (sum < target) {
            left++;
        } else {
            result.push(sorted[left], sorted[right])
            break;
        }
    }
    
    return [nums.indexOf(result[0]), nums.lastIndexOf(result[1])]
};