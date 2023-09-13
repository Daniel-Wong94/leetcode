/**
 * @param {string} s
 * @return {string}
 */
// use a stack
// start popping when ] is reached
// pop until no more numbers are left over
var decodeString = function(s) {
    const digits = "0123456789"
    const stack = []
    
    for (const c of s) {
        console.log("stack", stack, c, !isNaN(stack[stack.length - 1]))
        if (c !== "]") {
            if (digits.includes(c) && !isNaN(stack[stack.length - 1])) {
                stack[stack.length - 1] = stack[stack.length - 1] + c
            } else {
                stack.push(c)                
            }

        } else {
            let num = ""
            let char = "";
            
            while (true) {
                let popped = stack.pop()
                let next = stack[stack.length - 1]
                
                if (popped === "[") {
                    console.log("HERE", popped, next)
                    num = stack.pop()
                    break;
                }
                
                char = popped + char
            }
            
            stack.push(char.repeat(Number(num)))
        }
    }
    
    return stack.join("")
}