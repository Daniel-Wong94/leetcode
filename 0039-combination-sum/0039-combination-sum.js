/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

// either take the current candidate or the next
var combinationSum = function(candidates, target) {
    const result = []
    
    const dp = (i, total, current=[]) => {
        // base case: total === target
        // push a copy of the current array, to avoid reference issues
        if (total === target) {
            result.push(current.slice())
            return;
        }
        
        // base case: if total exceeds target or run out of candidates, there is no need to recursive
        if (i >= candidates.length || total > target) {
            return;
        }
        
        // recursive: take candidates[i] FIRST
        current.push(candidates[i])
        dp(i, total + candidates[i], current)
        
        // recursive: skip candidates[i] and take the next candidate
        current.pop()
        dp(i + 1, total, current)
    }
    
    dp(0, 0)
    return result;
};