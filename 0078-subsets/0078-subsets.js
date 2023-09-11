/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    // base case: nums is empty, then return [] as the only subset
    if (!nums.length) return [[]]
    
    // recursive: we take the first element
    const firstEl = nums[0]
    
    // recursive: we don't take the first element
    const subsetsWithoutFirstEl = subsets(nums.slice(1))
    
    // put the first element back into the subsets before returning
    const subsetsWithFirstEl = []
    
    for (const subset of subsetsWithoutFirstEl) {
        subsetsWithFirstEl.push([firstEl, ...subset])
    }
    
    return [...subsetsWithoutFirstEl, ...subsetsWithFirstEl]
};