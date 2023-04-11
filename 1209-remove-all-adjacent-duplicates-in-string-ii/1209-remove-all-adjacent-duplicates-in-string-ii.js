/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
    let stack = [] // elements = [char, numOfRepeat]
    
    for (const c of s){
        // compare current char with last stack's char
        if (stack.length && stack[stack.length - 1][0] === c) {
            stack[stack.length - 1][1]++
        } else {
            stack.push([c, 1])
        }
        
        // check if last stack's char count === k
        if (stack[stack.length - 1][1] === k) {
            stack.pop()
        }
    }
    
    // stack should have chars and their count in order; build string
    let result = ""
    
    stack.forEach(([char, num]) => result += char.repeat(num))
    
    return result;
};