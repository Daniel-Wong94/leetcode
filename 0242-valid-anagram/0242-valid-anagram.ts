function isAnagram(s: string, t: string): boolean {
    const characterCount: Record<string, number> = {}
    
    for (const char of s) {
        characterCount[char] = characterCount[char] + 1 || 1
    }
    
    for (const char of t) {
        if (characterCount[char] - 1 < 0) return false
        characterCount[char] = characterCount[char] - 1
    }
    
    return Object.values(characterCount).every((c: number) => c === 0)
};