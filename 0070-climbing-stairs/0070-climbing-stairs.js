/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n, memo = {1 : 1, 2 : 2}) {
    if (n in memo) return memo[n]
    memo[n] = climbStairs(n - 1, memo) + climbStairs(n - 2, memo)
    return memo[n]
};