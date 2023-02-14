/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    if (!nums.length) return [[]]
    
    const firstElement = nums[0]
    const subsetsWith = subsets(nums.slice(1))
    const subsetsWithout = []
    
    for (const subset of subsetsWith) {
        subsetsWithout.push([firstElement, ...subset])
    }
    
    return [...subsetsWith, ...subsetsWithout]
};