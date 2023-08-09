/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)
    const result = [[],[]]
    
    for (const num of nums2) {
        if (!set1.has(num) && !result[1].includes(num)) result[1].push(num)
    }
    
    for (const num of nums1) {
        if (!set2.has(num) && !result[0].includes(num)) result[0].push(num)
    }
    
    return result
};