/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if (s.length !== t.length) return false;
    
    const countS = []
    const countT = []
    
    for (const c of s) {
        countS.push(s.indexOf(c))
    }
    
    for (const c of t) {
        countT.push(t.indexOf(c))
    }
    
    for (let i = 0; i < s.length; i++) {
        if (countS[i] !== countT[i]) return false
    }
    
    return true
};