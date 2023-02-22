/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    if (!nums.length) return [[]]
    
    const firstEl = nums[0]
    
    const permutations = permute(nums.slice(1))
    
    const result = []
    
    for (const permutation of permutations) {
        for (let i = 0; i <= permutation.length; i++) {
            result.push([...permutation.slice(0, i), firstEl, ...permutation.slice(i)])
        }
    }
    
    return result;
};