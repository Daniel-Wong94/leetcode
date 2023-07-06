/**
 * @param {number} n
 * @return {number}
 */
var countNumbersWithUniqueDigits = function(n) {
    // base case: when power is 0, range is 0 - 1
    if (n === 0) return 1
    
    // base case: when power is 1, this is the only range where you get unique numbers at 10^n
    if (n === 1) return 10
    
    // all other n will have a max of 9
    let maxUniqueComboAtN = 9
    
    for (let i = 0; i < n - 1; i++) {
        maxUniqueComboAtN *= 9 - i;
    }
    
    return maxUniqueComboAtN + countNumbersWithUniqueDigits(n - 1)
    
};