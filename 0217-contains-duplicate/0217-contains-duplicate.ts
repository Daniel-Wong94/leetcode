function containsDuplicate(nums: number[]): boolean {
    const history = {}
    
    for (const num of nums) {
        if (history[num]) return history[num]
        else history[num] = true
    }
    
    return false
};