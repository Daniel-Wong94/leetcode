function firstUniqChar(s: string): number {
    const chars = {}
    
    for (const c of s) {
        if (chars.hasOwnProperty(c)) chars[c]++
        else chars[c] = 1
    }
    
    for (let i = 0; i < s.length; i++) {
        if (chars[s[i]] === 1) return i
    }
    
    return -1;
};