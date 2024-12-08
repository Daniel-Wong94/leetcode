function containsDuplicate(nums: number[]): boolean {
    const numsSet = new Set(nums)
    return nums.length !== numsSet.size
};