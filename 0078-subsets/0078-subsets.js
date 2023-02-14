/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // base case
    if (!nums.length) return [[]]
    
    const firstElement = nums[0]
    
    // decision branch without the first element
    const subsetsWithout = subsets(nums.slice(1))
    
    // decision branch with the first element
    const subsetsWith = []
    
    
    // build up the "with" branch by combining the first element and the without subsets
    for (const subset of subsetsWithout) {
        subsetsWith.push([firstElement, ...subset])
    }
    
    return [...subsetsWith, ...subsetsWithout]
};