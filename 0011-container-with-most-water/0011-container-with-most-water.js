/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = -Infinity
    let left = 0
    let right = height.length - 1
    
    while (left < right) {
        const distance = right - left
        const area = Math.min(height[left], height[right]) * distance
        maxArea = Math.max(maxArea, area)
        
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }
    
    return maxArea;
};