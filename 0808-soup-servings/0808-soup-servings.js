/**
 * @param {number} n
 * @return {number}
 */

// there is no choice to take from soupB and NOT from soupA,
// therefore, as n increases, you reach closer to 1
var soupServings = function(n) {
    // reduce the total mL to serving sizes (25ml per serving)
    const servings = Math.ceil(n / 25)
    const memo = {}
    
    // threshold in which probability reaches near 1 and passes the margin of error
    if (n > 4451) return 1

    const dpHelper = (i, j) => {
        const key = i + ", " + j
        if (key in memo) return memo[key]
        
        // base cases
        if (i <= 0 && j <= 0) return 0.5        // if both reaches 0, then there's a 50% chance of soup A reaching 0 first
        if (i <= 0) return 1                    // soup A reaching 0 first is a 100% chance
        if (j <= 0) return 0                    // soup B reaching 0 first is a 0% chance of A reaching 0 first
        
        // memoize 25% chance of total probabilty of the four choices you can make
        memo[key] = 0.25 * (dpHelper(i - 4, j) + dpHelper(i - 3, j - 1) + dpHelper(i - 2, j - 2) + dpHelper(i - 1, j - 3))
        return memo[key]
    }
    
    return dpHelper(servings, servings)
};
