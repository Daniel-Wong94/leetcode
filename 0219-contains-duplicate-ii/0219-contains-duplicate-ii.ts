function containsNearbyDuplicate(nums: number[], k: number): boolean {
    if (nums.length === 1) return false
    
    let leftPointer = 0
    let rightPointer = 1
    const set = new Set([nums[leftPointer]])
    
    while (rightPointer < nums.length) {
        if (Math.abs(leftPointer - rightPointer) > k) {
            set.delete(nums[leftPointer])
            leftPointer++
            continue
        }

        if (set.has(nums[rightPointer])) {
            return true
        } else {
            set.add(nums[rightPointer])
        }
        
        rightPointer++
    }
    
    return false
};