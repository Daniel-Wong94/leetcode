/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    return (Math.log(n) / Math.log(2)).toFixed(10) % 1 === 0
};