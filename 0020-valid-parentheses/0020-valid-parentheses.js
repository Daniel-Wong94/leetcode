/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if (s.length % 2 === 1) return false;
    
    const match ={
        "(" : ")",
        "[" : "]",
        "{" : "}"
    }
    
    const stack = []
    
    for (const char of s) {
        if (char in match) {
            stack.push(char)
        } else {
            if (!stack.length) return false;
            const open = stack.pop()
            if (match[open] !== char) return false;
        }
    }
    
    return stack.length === 0;
};