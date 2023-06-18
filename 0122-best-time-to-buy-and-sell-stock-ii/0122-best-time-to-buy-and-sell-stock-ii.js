/**
 * @param {number[]} prices
 * @return {number}
 */

// from Buy and Sell part I
// instead of finding the greatest difference, we now need to add up all the positive differences
// edge case, the stock prices always increase:
// since we can buy and sell each day, we can crawl through the slope
// buying day 1 and selling day 10 is the same as buy/sell each day
var maxProfit = function(prices) {
    let maxProfit = 0
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] > prices[i - 1]) {
            maxProfit += prices[i] - prices[i - 1]
        }
    }
    
    return maxProfit
};