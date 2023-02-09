/**
 * @param {string} s
 * @return {number}
 */
var longestPalindromeSubseq = function(s, i = 0, j = s.length - 1, memo = {}) {
    const key = i + "," + j
    if (key in memo) return memo[key]
    
    if (i > j) return 0;
    if (i === j) return 1;
    
    if (s[i] === s[j]) {
        memo[key] = 2 + longestPalindromeSubseq(s, i + 1, j - 1, memo)
    } else {
        memo[key] = Math.max(
            longestPalindromeSubseq(s, i + 1, j, memo),
            longestPalindromeSubseq(s, i, j - 1, memo)
        )
    }
    
    return memo[key]
};