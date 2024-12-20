function checkIfExist(arr: number[]): boolean {
    const visited = new Set()
    
    for (const num of arr) {
        if (visited.has(num / 2) || visited.has(num * 2)) return true
        visited.add(num)
    }
    
    return false
};