/**
 * @param {number[]} prices
 * @return {number}
 */

// solve like part 1
// except, "reinvest" the first transaction with each iteration
// the second transaction will be the max profit
var maxProfit = function(prices) {
    let cost1 = cost2 = Infinity
    let profit1 = profit2 = 0
    
    for (const price of prices) {
        cost1 = Math.min(cost1, price)
        profit1 = Math.max(profit1, price - cost1)
        
        // reinvest
        cost2 = Math.min(cost2, price - profit1)
        profit2 = Math.max(profit2, price - cost2)
    }
    
    return profit2
};