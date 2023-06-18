/**
 * @param {number[]} prices
 * @return {number}
 */

// iterate through each price
// keep checking if it's the lowest buy
// then check if it's the highest profit
var maxProfit = function(prices) {
    let maxProfit = 0
    let minBuy = Infinity
    
    for (const price of prices) {
        minBuy = Math.min(minBuy, price)
        maxProfit = Math.max(maxProfit, price - minBuy)
    }
    
    return maxProfit
};