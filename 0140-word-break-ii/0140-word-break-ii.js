/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    const result = []
    
    if (wordDict.includes(s)) result.push(s)
    
    for (let i = 1; i < s.length; i++) {
        const prefix = s.substring(0, i)
        
        if (wordDict.includes(prefix)) {
            const sublist = wordBreak(s.substring(i), wordDict)
            
            for (const sub of sublist) {
                result.push(prefix + " " + sub)
            }
        }
    }
    
    return result
};