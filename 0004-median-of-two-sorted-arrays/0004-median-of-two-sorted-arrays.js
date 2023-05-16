/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const len1 = nums1.length
    const len2 = nums2.length
    const total = len1 + len2
    
    // make sure nums1 is always the shorter array, 
    // in order to optimize binary search to only apply to the smaller array
    if (len1 > len2) return findMedianSortedArrays(nums2, nums1)

    const half = Math.floor((len1 + len2) / 2)
    let [low, hi] = [0, len1 - 1]

    while (true) {
        const partition1 = Math.floor((low + hi) / 2)
        const partition2 = half - partition1 - 2
        
        // check that all of left partition is less than right partition
        // we already know that the arrays are sorted so we just have to check for
        // highest left partition of nums1 is <= lowest right partition of nums2 AND
        // highest left partition of nums2 is <= lowest right partition of nums1
        const maxLeft1 = partition1 >= 0 ? nums1[partition1] : -Infinity
        const maxLeft2 = partition2 >= 0 ? nums2[partition2] : -Infinity
        const minRight1 = partition1 + 1 < len1 ? nums1[partition1 + 1] : Infinity
        const minRight2 = partition2 + 1 < len2 ? nums2[partition2 + 1] : Infinity
        
        if (maxLeft1 <= minRight2 && maxLeft2 <= minRight1) {
            if (total % 2 !== 0) {
                return Math.min(minRight1, minRight2)
            } else {
                return (Math.max(maxLeft1, maxLeft2) + Math.min(minRight1, minRight2)) / 2
            }
        } else if (maxLeft1 > minRight2) {
            hi = partition1 - 1
        } else {
            low = partition1 + 1
        }
    }
};