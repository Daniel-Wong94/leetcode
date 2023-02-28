/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    // base case: empty array returns no permutations
    if (!nums.length) return [[]]
    
    // hold the first element
    const firstEl = nums[0]
    
    // recursive call on the rest of the array
    const permutations = permute(nums.slice(1))
    
    const result = []
    
    // after recursive stack, permutations will hold different permutations without the first element
    for (const permutation of permutations) {
        // put the first element back to each sub permutation in each position
        for (let i = 0; i <= permutation.length; i++) {
            result.push([...permutation.slice(0, i), firstEl, ...permutation.slice(i)])
        }
    }
    
    return result;
};