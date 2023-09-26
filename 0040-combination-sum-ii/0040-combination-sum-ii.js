/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const results = []
    candidates.sort((a, b) => a - b)
    
    const dp = (combination, remain, current, results) => {
        if (remain === 0) {
            results.push(combination.slice())
            return
        }
        
        for (let i = current; i < candidates.length; i++) {
            if (i > current && candidates[i] === candidates[i - 1]) {
                continue
            }
            
            const next = candidates[i]
            
            if (remain - next < 0) break;
            
            combination.push(next)
            dp(combination, remain - next, i + 1, results)
            combination.pop()
        }
        
    }

    dp([], target, 0, results)
    
    return results;
};