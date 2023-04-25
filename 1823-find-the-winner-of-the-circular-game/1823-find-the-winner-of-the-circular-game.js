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
    
    // pointer for elimination
    let current = 0
    
    while (circle.length > 1) {
        // loser idx
        const loser = (current + k - 1) % circle.length
        
        // remove loser
        circle.splice(loser, 1)

        // update elimination pointer
        current =  (loser) % circle.length
    }
    
    return circle[0]
};