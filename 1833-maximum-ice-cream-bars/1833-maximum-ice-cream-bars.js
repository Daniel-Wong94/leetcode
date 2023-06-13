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
    // array length at max costs, all starting at 0
    const freq = Array(Math.max(...costs) + 1).fill(0)
    
    // increment the freq array, where i = cost, freq[i] = number of times of that cost
    costs.forEach(cost => freq[cost]++)
    
    let result = 0
    
    // iterate from 1 since there will never be a cost of 0
    for (let i = 1; i < freq.length; i++) {
        // skip the empty elements, and break the loop when the coins are insufficient
        if (freq[i] === 0) continue;
        if (coins < i) break;
        
        // if you can afford more than the freq[i], save the count as freq[i]
        const count = Math.min(freq[i], Math.floor(coins / i))
        
        // deduct the coins by the cost * count
        coins -= i * count;
        result += count
    }
    
    return result
}