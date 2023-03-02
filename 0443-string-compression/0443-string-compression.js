/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function(chars) {
    let left = right = 0
    let current = chars[0]
    let count = 0
    
    while (right < chars.length) {
        if (current === chars[right]) {
            count++
            right++
        } else {
            chars[left++] = current
            if (count > 1) {
                const digits = String(count).split("")
                for (const digit of digits) {
                    chars[left++] = digit
                }
            }
            
            count = 0
            current = chars[right]
        } 
    }
            
    chars[left++] = current
    
    if (count > 1) {
        const digits = String(count).split("")  
        for (const digit of digits) {
            chars[left++] = digit
        }
    }
    
    return left
};