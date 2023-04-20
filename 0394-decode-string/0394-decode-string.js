/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    const stack = []
    
    // keep pushing to stack until ']' is found, then decode the latest string
    for (const char of s) {
        if (char === "]") {
            const decode = []
            
            while (stack.length && stack[stack.length - 1] !== "[") {
                decode.push(stack.pop())
            }
            
            stack.pop() // remove the next "[" from stack
            
            // build up the multiplier
            let times = 0
            let base = 1;
            
            while (!isNaN(stack[stack.length - 1])) {
                times = times + stack.pop() * base
                base *= 10
            }
            
            // push the decoded string back into stack
            while (times !== 0) {
                for (let i = decode.length - 1; i >= 0; i--) {
                    stack.push(decode[i])
                }
                
                times--
            }
        } else {
        // if neither '[' nor ']', then must be a char
            stack.push(char)
        }
    }

    return stack.join('');
}