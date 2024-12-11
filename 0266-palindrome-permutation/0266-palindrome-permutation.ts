function canPermutePalindrome(s: string): boolean {
    let evens = 0
    
    const counter = {}
    
    for (const char of s) {
        counter[char] = counter[char] + 1 || 1
        
        if (counter[char] % 2 === 0) evens++
        if (counter[char] % 2 !== 0) evens--
    }

    return -1 <= evens && evens <= 1
};