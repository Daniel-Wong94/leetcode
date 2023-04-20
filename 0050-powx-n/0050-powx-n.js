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
    
    // 2^4 = 2 * 2 * 2 * 2 is the same as 4 ^ 2 = 4 * 4
    // 2^5 = 2 * 2 * 2 * 2 * 2 is the same as (4 ^ 2) * 2 = 4 * 4 * 2
    const result = isEvenPow ? myPow(x * x, pow / 2) : myPow(x * x, (pow - 1) / 2) * x
    
    
    // if power is negative, return the inverse of it
    return isPosN ? result : 1 / result
};
