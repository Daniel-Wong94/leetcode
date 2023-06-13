/**
 * @param {number[]} costs
 * @param {number} coins
 * @return {number}
 */

// sort ascending and count how many icecreams can be bought
// var maxIceCream = function(costs, coins) {
//     costs.sort((a, b) => a - b)
    
//     let i = 0
    
//     while (i < costs.length && coins >= costs[i]) {
//         coins -= costs[i]
//         i++
//     }
    
//     return i
// };

// use an array to track the freq of each cost
const maxIceCream = (costs, coins) => {
    const freq = Array(Math.max(...costs) + 1).fill(0)
    
    costs.forEach(cost => freq[cost]++)
    
    let result = 0
    
    for (let i = 1; i < freq.length; i++) {
        if (freq[i] === 0) continue;
        if (coins < i) break;
        
        const count = Math.min(freq[i], Math.floor(coins / i))
        
        coins -= i * count;
        result += count
    }
    
    return result
}