/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
    const reverse = (nums, start, end) => {
        while (start < end) {
            [nums[start], nums[end]] = [nums[end], nums[start]]
            start++
            end--
        }
    }

    const n = nums.length
    k %= n // shorten the k

    nums.reverse()
    reverse(nums, 0, k - 1)
    reverse(nums, k, n - 1)
};