/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// two binary searches to find lower and upper bound
// lower bound: you know you found it if left === target or mid - 1 !== target
// upper bound: you know you found it if right === target or mid + 1 !== target
var searchRange = function(nums, target) {
    const lower = lowerBound(nums, target)
    if (lower === -1) return [-1, -1]
    const upper = upperBound(nums, target, lower)
    
    return [lower, upper]
};

const lowerBound = (nums, target) => {
    let left = 0
    let right = nums.length - 1
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        
        if (nums[left] === target) {
            return left
        } else if (nums[mid] === target) {
            if (nums[mid - 1] !== target) {
                return mid
            } else {
                right = mid - 1
            }
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    
    return -1
}

const upperBound = (nums, target, lower) => {
    let left = lower
    let right = nums.length - 1
    
    while (left <= right) {
        let mid = Math.floor((left + right) / 2)
        
        if (nums[right] === target) {
            return right
        } else if (nums[mid] === target) {
            if (nums[mid + 1] !== target) {
                return mid
            } else {
                left = mid + 1
            }
        } else if (nums[mid] > target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    
    return -1    
}