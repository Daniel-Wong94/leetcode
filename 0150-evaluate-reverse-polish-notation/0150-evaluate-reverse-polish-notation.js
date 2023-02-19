/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    const operations = ["+", "-", "*", "/"]
    const stack = []
    
    for (const token of tokens) {
        let val1, val2;
        
        if (operations.includes(token)) {
            val1 = Number(stack.pop())
            val2 = Number(stack.pop())
            
            switch(token) {
                case "+": stack.push(val2 + val1); break;
                case "-": stack.push(val2 - val1); break;
                case "*": stack.push(val2 * val1); break;
                case "/": stack.push(Math.trunc(val2 / val1)); break;
            }
        } else {
            stack.push(token)
        }
    }
    
    return stack[0]
};