/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    const pairs = position.map((car, i) => [car, speed[i]])
    pairs.sort((a, b) => b[0] - a[0])
    
    const times = pairs.map(([p, s]) => ((target - p) / s))
    
    let count = 0
    let currFleet = -Infinity
    
    for (const time of times) {
        if (time > currFleet) {
            count++
            currFleet = time
        }   
    }
    
    return count;
};