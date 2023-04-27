/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    let numCoins = _coinChange(coins, amount)
    
    return numCoins === Infinity ? -1 : numCoins
};


const _coinChange = (coins, amount, memo = {}) => {
    if (amount in memo) return memo[amount]
    if (amount === 0) return 0
    if (amount < 0) return Infinity
    
    let min = Infinity
    
    for (const coin of coins) {
       let numCoins = 1 + _coinChange(coins, amount - coin, memo)
       min = Math.min(min, numCoins)
    }
    
    memo[amount] = min
    return memo[amount]
}