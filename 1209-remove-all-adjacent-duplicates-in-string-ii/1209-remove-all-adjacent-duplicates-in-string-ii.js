/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = []
    let prev = ""
    let result = ""
    
    for (let i = 0; i < s.length; i++) {
        const c = s[i]
        
        if (c === prev) {
            stack[stack.length - 1]++
        } else {
            stack.push(1)            
        }
        
        result += c
        
        if (stack[stack.length - 1] === k) {
            stack.pop()
            result = result.substring(0, result.length - k)
        }
        
        prev = result[result.length - 1]
    }
    
    return result
};