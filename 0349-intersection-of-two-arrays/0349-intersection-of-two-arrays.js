/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1)
    const result = new Set()
    
    nums2.forEach(num => {
        if (set1.has(num)) result.add(num)
    })
    
    return Array.from(result)
};