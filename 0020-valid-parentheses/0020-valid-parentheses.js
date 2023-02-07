/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
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
            const open = stack.pop()
            if (!open) return false;
            if (match[open] !== char) return false;
        }
    }
    
    return stack.length === 0;
};