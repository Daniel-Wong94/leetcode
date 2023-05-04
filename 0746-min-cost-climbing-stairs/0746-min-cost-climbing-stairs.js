/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(costs, i = 0, memo = {}) {
    if (i in memo) return memo[i]
    if (i >= costs.length - 1) return 0
    if (i === costs.length - 2) return Math.min(costs[i], costs[i + 1])
    
    let total = 0
    
    const take = costs[i] + minCostClimbingStairs(costs, i + 1, memo)
    const next = costs[i + 1] + minCostClimbingStairs(costs, i + 2, memo)
    
    total += Math.min(take, next)
    memo[i] = total
    return memo[i]
};
