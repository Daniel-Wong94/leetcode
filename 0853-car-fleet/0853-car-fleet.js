/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function(target, position, speed) {
    // pair position-speed and sort by position (descending)
    const pairs = position.map((car, i) => [car, speed[i]])
    pairs.sort((a, b) => b[0] - a[0])
    
    // calculate time at finish line for each car
    const times = pairs.map(([p, s]) => ((target - p) / s))
    
    let count = 0
    let currFleet = -Infinity
    
    // when a time is slower (greater than) the currFleet, that means a new fleet is being formed
    for (const time of times) {
        if (time > currFleet) {
            count++
            currFleet = time
        }   
    }
    
    return count;
};