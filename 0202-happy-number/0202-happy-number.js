/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set()
    
    while (n > 1) {
        if (seen.has(n)) return false;
        seen.add(n)
        n = getSquare(n)
    }
    
    return n === 1;
};

const getSquare = num => {
    let sum = 0;
    
    while (num > 0) {
        let lastDigit = num % 10
        num = Math.floor(num / 10)
        sum += lastDigit**2
    }
    
    return sum;
}