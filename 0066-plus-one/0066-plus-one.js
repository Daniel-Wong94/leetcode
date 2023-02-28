/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let carry = 1
    let i = digits.length - 1
     
    while (carry > 0 && i >= 0) {
        const sum = digits[i] + carry
        carry = Math.floor(sum / 10)
        digits[i] = sum > 9 ? sum % 10 : sum
        i--
    }
    
    if (carry > 0) digits.unshift(carry)
    
    return digits
};