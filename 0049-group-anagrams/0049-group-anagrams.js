/**
 * @param {string[]} strs
 * @return {string[][]}
 */

// 
const groupAnagrams = strs => {
    const tracker = {}
    
    for (const str of strs) {
        const key = getKey(str)
        
        if (!tracker[key]) tracker[key] = [str]
        else tracker[key].push(str)
    }
    
    return Object.values(tracker)
}; 

// n = length of str; Time: O(n); Space: O(1)
const getKey = str => {
    const count = Array(26).fill(0)
    
    for (let i = 0; i < str.length; i++) {
        const index = str.toLowerCase().charCodeAt(i) - 97
        count[index]++
    }
    
    return JSON.stringify(count);
}