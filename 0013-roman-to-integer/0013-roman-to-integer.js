/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const value = {
        I : 1,
        V : 5,
        X : 10,
        L : 50,
        C : 100,
        D : 500,
        M : 1000
    }
    
    let total = 0

    
    for (let i = 0; i < s.length; i++) {
        if (value[s[i]] < value[s[i + 1]]) {
            total -= value[s[i]]
        } else [
            total += value[s[i]]
        ]
    }
    
    return total
};