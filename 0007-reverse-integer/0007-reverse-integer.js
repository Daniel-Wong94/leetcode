/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    // keep track of -/+ of x
    const isNegative = x < 0
    
    // use positive x for easier division
    x = Math.abs(x)
    
    let result = 0
    
    while (x > 0) {
        const lastDigit = x % 10
        result = lastDigit + (result * 10)
        
        x = Math.floor(x / 10)
    }
    
    // check for overflow
    if (result > Math.pow(2, 31)) return 0
    
    // revert to negative
    return isNegative ? result * -1 : result
};