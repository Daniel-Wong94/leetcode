/**
 * @param {number[]} nums
 * @return {boolean}
 */

// can't greedy method because it can lead to player2 getting a bigger score
// dp: compare sum of the left vs right decisions, choosing the max score after decision
var PredictTheWinner = function(nums) {
    
    const getWinner = (left, right, memo = {}) => {
        const key = left + ", " + right
        if (key in memo) return memo[key]
        
        // base case: no more elements left in nums
        if (left > right) return 0

        // pick a side, then subtract whatever player2 will choose
        const takeLeft = nums[left] - getWinner(left + 1, right, memo)
        const takeRight = nums[right] - getWinner(left, right - 1, memo)

        memo[key] = Math.max(takeLeft, takeRight)
        return memo[key]
    }
    
    return getWinner(0, nums.length - 1) >= 0
};