/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    // sort the nums array [-4, -1, -1, 0, 1, 2]
    // prev = -4             C       L        R
    // target = 4
    // two sum = [-4, -1, -1, 0, 1, 2]
    const result = []
    let previous = null;
    let sorted = nums.slice().sort((a, b) => a - b)
    console.log("sorted", sorted)

    for (let i = 0; i < sorted.length; i++) {
        const current = sorted[i]
        if (previous === current) continue;
        previous = current
        if (current > 0) break;
        
        let left = i + 1;
        let right = sorted.length - 1;
        let target = Math.abs(current)
        let prevLeft, prevRight;
        
        while (left < right) {
            const total = sorted[left] + sorted[right]
            if (sorted[left] === prevLeft && sorted[right] === prevRight) {
                left++
                right--
                continue
            }
            
            if (total < target) {
                prevLeft = sorted[left]
                left++
            } else if (total > target) {
                prevRight = sorted[right]
                right--
            } else {
                result.push([ current, sorted[left], sorted[right] ])
                prevLeft = sorted[left]
                prevRight = sorted[right]
                left++
                right--
            }
        }
    }
    
    return result;
};