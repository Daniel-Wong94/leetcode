/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var findTheWinner = function(n, k) {
    // set up the circle
    const circle = []
    
    for (let i = 1; i <= n; i++) {
        circle.push(i)
    }
    
    let current = 0
    
    while (circle.length > 1) {
        const loser = (current + k - 1) % circle.length
        
        console.log("loser", circle[loser])
        
        circle.splice(loser, 1)
        console.log("circle", circle)
        current =  (loser) % circle.length
        console.log("current", current)
    }
    
    return circle[0]
};