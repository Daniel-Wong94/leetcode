/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alpha = "abcdefghijklmnopqrstuvwxyz0123456789"
    let left = 0, right = s.length - 1
    
    while (left < right) {
        const start = s[left].toLowerCase()
        const end = s[right].toLowerCase()
        
        if (!alpha.includes(start)) {
            left++;
            continue
        } else if (!alpha.includes(end)) {
            right--;
            continue;
        } else {
            if (start !== end) {
                return false;
            }
        }
        left++
        right--
    }
    
    return true;
};