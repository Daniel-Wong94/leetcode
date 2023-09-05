/**
 * @param {number} n
 * @return {number}
 */

var soupServings = function(n) {
    const servings = Math.ceil(n / 25)
    const memo = {}
    
    if (n > 4451) return 1

    const dpHelper = (i, j) => {
        const key = i + ", " + j
        if (key in memo) return memo[key]
        
        // base cases
        if (i <= 0 && j <= 0) return 0.5
        if (i <= 0) return 1
        if (j <= 0) return 0
        
        memo[key] = 0.25 * (dpHelper(i - 4, j) + dpHelper(i - 3, j - 1) + dpHelper(i - 2, j - 2) + dpHelper(i - 1, j - 3))
        return memo[key]
    }
    
    return dpHelper(servings, servings)
};
