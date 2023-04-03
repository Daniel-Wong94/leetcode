/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {
    // sort the costs by the price diff of cityA (cost[i][0]) - cityB (cost[i][1]) 
    // ascending order of the price diff if we keep sending to cityA
    // cheapest difference to send to cityA -> most expensive difference to send to cityA
    costs.sort((a, b) => (a[0] - a[1]) - (b[0] - b[1]))
    
    // send half of the people to the first half of costs and rest to other half
    let totalCost = 0
    const n = costs.length / 2
    
    for (let i = 0; i < n; i++) {
        totalCost += costs[i][0] + costs[i + n][1]
    }
    
    return totalCost
};

