/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    // set pointers
    let left = right = 0
    let current = chars[0]
    let count = 0
    
    // iterate right pointer
    while (right < chars.length) {
        // if match, increment count and pointer
        // otherwise, mutate chars with current and digits, reset count and current char
        if (current === chars[right]) {
            count++
            right++
        } else {
            chars[left++] = current
            if (count > 1) {
                const digits = String(count)
                for (const digit of digits) {
                    chars[left++] = digit
                }
            }
            
            count = 0
            current = chars[right]
        } 
    }
         
    chars[left++] = current
    
    // check if we have any digits left to inject into chars   
    if (count > 1) {
        const digits = String(count)
        for (const digit of digits) {
            chars[left++] = digit
        }
    }
    
    return left
};