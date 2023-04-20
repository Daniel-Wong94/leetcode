/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []
    
    for (const char of s) {
        if (char === "]") {
            const decode = []
            
            while (stack.length && stack[stack.length - 1] !== "[") {
                decode.push(stack.pop())
            }
            
            stack.pop() // remove the next "[" from stack
            
            let times = 0
            let base = 1;
            
            while (stack.length && !isNaN(stack[stack.length - 1])) {
                times = times + stack.pop() * base
                base *= 10
            }
                        
            while (times !== 0) {
                for (let i = decode.length - 1; i >= 0; i--) {
                    stack.push(decode[i])
                }
                
                times--
            }
        } else {
            stack.push(char)
        }
    }

    return stack.join('');
}