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
            chars[left] = current
            if (count > 1) {
                // chars[left + 1] = String(count)
                // left += 2
                const digits = String(count).split("")
                
                for (let i = 0; i < digits.length; i++) {
                    chars[left + 1 + i] = digits[i]
                }
                
                left += digits.length + 1
            } else {
                left++
            }
            
            count = 0
            current = chars[right]
        } 
    }
        
    if (count === 1) {
        chars[left] = current
        return left + 1
    }
    if (count > 1) {
        chars[left] = current
        const digits = String(count).split("")
        
        for (let i = 0; i < digits.length; i++) {
            chars[left + 1 + i] = digits[i]
        }
        
        return left + digits.length + 1
    }
    
    return left + 1
};