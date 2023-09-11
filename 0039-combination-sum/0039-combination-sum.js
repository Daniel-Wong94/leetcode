/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
    const result = []
    
    const dp = (i, total, current = []) => {
        // base case: if target is 0 then add combination to result
        if (total === target) {
            result.push(current.slice())
            return
        }
        
        if (i >= candidates.length || total > target) {
            return
        }
        
        // recursive step: take current candidates[i]
        current.push(candidates[i])
        dp(i, total + candidates[i], current)
        
        // recursive step: take next candidate
        current.pop()
        dp(i + 1, total, current)
    }
    
    dp(0, 0)
    return result
};