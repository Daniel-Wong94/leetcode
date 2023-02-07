/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const history = {}
    const result = new Set();
    
    for (const num of new Set(nums1)) {
        history[num] = 1;
    }
    
    for (const num of new Set(nums2)) {
        if (num in history) {
            result.add(num)
        } else {
            history[num] = 1;
        }
    }
    
    for (const num of new Set(nums3)) {
        if (num in history) {
            result.add(num)
        } else {
            history[num] = 1;
        }
    }
    
    return Array.from(result);
};