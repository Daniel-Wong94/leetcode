/**
 * @param {number[]} time
 * @return {number}
 */
var numPairsDivisibleBy60 = function(times) {
    const remainders = new Array(60).fill(0)
    let result = 0
    
    for (const time of times) {
        if (time % 60 === 0) {
            result += remainders[0]
        } else {
            result += remainders[60 - time % 60]
        }
        remainders[time % 60]++
    }
    
    return result;
};
