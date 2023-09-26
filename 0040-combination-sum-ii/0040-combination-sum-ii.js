/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    const results = []
    
    // sorting the candidates makes it easier to handle duplicate numbers (next to each other)
    candidates.sort((a, b) => a - b)
    
    const dp = (combination, remain, current, results) => {
        // base case: remain has reached target, so push copy of combination to final result
        if (remain === 0) {
            results.push(combination.slice())
            return
        }
        
        // initialize to -1 to prevent error on first iteration
        let prevCandidate = -1
        
        for (let i = current; i < candidates.length; i++) {
            const nextCandidate = candidates[i]
            
            // skip index when current candidate is same as previous
            if (nextCandidate === prevCandidate) {
                continue
            }
            
            // optimize: break out of loop if we pass target
            if (remain - nextCandidate < 0) break;
            
            // decision: take the nextCandidate
            combination.push(nextCandidate)
            dp(combination, remain - nextCandidate, i + 1, results)
            
            // decision: don't take nextCandidate (pop it back out before next iteration)
            combination.pop()
            
            // store the previous candidate
            prevCandidate = candidates[i]
        }
        
    }

    dp([], target, 0, results)
    
    return results;
};