/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let maxArea = -Infinity
    let left = 0
    let right = height.length - 1
    
    while (left < right) {
        maxArea = Math.max(maxArea, getArea(height, left, right))
        
        // if (height[left + 1] > height[right - 1]) {
        //     left++
        // } else {
        //     right--
        // }
        if (height[left] < height[right]) {
            left++;
        } else {
            right--;
        }
        
        maxArea = Math.max(maxArea, getArea(height, left, right))
    }
    
    return maxArea;
};

const getArea = (height, left, right) => {
    const distance = right - left
    const area = Math.min(height[left], height[right]) * distance
    return area;
}