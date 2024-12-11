function canPermutePalindrome(s: string): boolean {
    if (s.length === 1) return true
    
    const counter = {}
    
    for (const char of s) {
        counter[char] = counter[char] + 1 || 1
    }
    
    let hasMiddleChar = false

    for (const char in counter) {
        if (counter[char] % 2 !== 0 && !hasMiddleChar) {
            hasMiddleChar = true
            continue
        }
        
        if (counter[char] % 2 !== 0 && hasMiddleChar) return false
    }
    
    return true
};