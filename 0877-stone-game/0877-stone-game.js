/**
 * @param {number[]} piles
 * @return {boolean}
 */

// piles.length = even number
// piles[i] >= 0
// total of piles = odd number
// Alice starts first
// always take from pile[0] or pile[piles.length - 1]
var stoneGame = function(piles) {
    
    const getWinner = (left, right, memo={}) => {
        const key = left + ", " + right
        if (key in memo) return memo[key]
        
        if (left > right) return 0
        
        const takeLeft = piles[left] - getWinner(left + 1, right, memo)
        const takeRight = piles[right] - getWinner(left, right - 1, memo)
        
        memo[key] = Math.max(takeLeft, takeRight)
        return memo[key]
    }
    
    return getWinner(0, piles.length - 1) > 0
};