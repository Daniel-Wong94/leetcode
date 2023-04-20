/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    // base case: all num ^ 0 returns 1
    if (n === 0) return 1;
    
    const pow = Math.abs(n)
    const isEvenPow = pow % 2 === 0
    const isPosN = n > 0
    const result = isEvenPow ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x
    
    return isPosN ? result : 1 / result
};
