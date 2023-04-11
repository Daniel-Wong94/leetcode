/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = []
    
    for (const c of s){
        if (stack.length && stack[stack.length - 1][0] === c) {
            stack[stack.length - 1][1]++
        } else {
            stack.push([c, 1])
        }
        
        if (stack[stack.length - 1][1] === k) {
            stack.pop()
        }
    }
    
    let result = ""
    
    stack.forEach(([char, num]) => result += char.repeat(num))
    
    return result;
};