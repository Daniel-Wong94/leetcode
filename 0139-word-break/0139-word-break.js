/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict, start = 0, memo={}) {
    if (start in memo) return memo[start]
    // base case
    if (start === s.length) return true
    
    // loop through wordDict, recurse when we find that it startsWith
    for (let end = start + 1; end <= s.length; end++) {
        if (wordDict.includes(s.slice(start, end)) && wordBreak(s, wordDict, end, memo)) {
            memo[start] = true
            return memo[start]
        }
    }
    
    memo[start] = false
    return memo[start]
};