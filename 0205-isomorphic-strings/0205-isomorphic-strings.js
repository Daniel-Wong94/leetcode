/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    // isomorphic: frequency of chars are in the same index
    // two way map s[i] to t[i]
    const sMap = {}
    const tMap = {}
    
    for (let i = 0; i < s.length; i++) {
        if (!sMap.hasOwnProperty(s[i])) {
            sMap[s[i]] = t[i]    
        } else {
            if (sMap[s[i]] !== t[i]) return false
        }
        
        tMap[t[i]] = s[i]

    }
    
    for (const char in sMap) {
        if (char !== tMap[sMap[char]]) return false
    }

    return true
};