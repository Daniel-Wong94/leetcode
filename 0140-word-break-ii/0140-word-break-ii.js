/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

// inefficient
var wordBreak = function(s, wordDict) {
    const result = []
    
    if (wordDict.includes(s)) result.push(s)
    
    for (let i = 0; i < s.length; i++) {
        const prefix = s.substring(0, i)
        
        if (wordDict.includes(prefix)) {
            // dfs all the way to the last word that works
            // the result array from the previous recursive step becomes your suffixes array
            const suffixes = wordBreak(s.substring(i), wordDict)

            // build up the sentences
            for (const suffix of suffixes) {
                result.push(prefix + " " + suffix)
            }
        }
    }
    
    return result
};