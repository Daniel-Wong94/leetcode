/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    // iterate through each word and sort its chars
    // use the new word as a key in an object tracker
    // the values will be an array of each word
    const tracker = {}
    
    for (const str of strs) {
        const word = str.split("").sort().join("")
        
        if (word in tracker) tracker[word].push(str)
        else tracker[word] = [str]
    }
    
    return Object.values(tracker)
};