/**
 * @param {number[]} heights
 * @return {number}
 */

// brute force: TLE
// var largestRectangleArea = function(heights) {
//     let largestArea = 0
    
//     for (let i = 0; i < heights.length; i++) {
//         let minHeight = Infinity
        
//         for (let j = i; j < heights.length; j++) {
//             minHeight = Math.min(minHeight, heights[j])
//             const area = minHeight * (j - i + 1)
//             largestArea = Math.max(largestArea, area)
//         }
//     }
    
//     return largestArea
// };

// optimized: use a stack 
const largestRectangleArea = heights => {
    const stack = [ -1 ]
    let maxArea = 0
    
    for (let i = 0; i < heights.length; i++) {
        
        while (stack.length > 1 && heights[stack.at(-1)] >= heights[i]) {
            const currentHeight = heights[stack.pop()]
            const currentWidth = i - stack.at(-1) - 1
            maxArea = Math.max(maxArea, currentHeight * currentWidth)
        }
        
        stack.push(i)
    }
    
    while (stack.length > 1) {
        const currentHeight = heights[stack.pop()]
        const currentWidth = heights.length - stack.at(-1) - 1
        maxArea = Math.max(maxArea, currentHeight * currentWidth)
    }
    
    return maxArea
}