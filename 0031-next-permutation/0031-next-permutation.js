/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    // find the pivot point
    let pivot = nums.length - 1
    
    while (pivot > 0 && nums[pivot] <= nums[pivot - 1]) {
        pivot--
    }
    
    // find best place to swap the pivot
    if (pivot > 0) {
        let i = nums.length - 1

        while (nums[i] <= nums[pivot - 1]) {
            i--
        }

        // i holds the position to swap with pivot - 1
        [nums[i], nums[pivot - 1]] = [nums[pivot - 1], nums[i]]

        // reverse from pivot to end of nums to get next greatest permutation
        let left = pivot
        let right = nums.length - 1
        
        while (left < right) {
            [nums[left], nums[right]] = [nums[right], nums[left]]
            
            left++
            right--
        }
        
    } else {
        nums.reverse()
    }

    
    return nums;
};