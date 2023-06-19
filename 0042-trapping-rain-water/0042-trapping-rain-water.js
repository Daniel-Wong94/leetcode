/**
 * @param {number[]} height
 * @return {number}
 */


// // at each height, find the max height to the left and right of it
// // since the min height of the two maxes is the bottleneck, we'll select that value
// // subtract the current height from the selected value
// // if the value is positive, add it to our result
// // this will timeout time: O(n^2) space: O(1)
// const trap = heights => {
//     let result = 0

//     for (let i = 1; i < heights.length; i++) {
//         const maxLeft = Math.max(...heights.slice(0, i))
//         const maxRight = Math.max(...heights.slice(i + 1))
//         const bottleNeck = Math.min(maxLeft, maxRight)
//         const value = bottleNeck - heights[i]
        
//         if (value > 0) result += value
//     }
    
//     return result;
// }

// sacrifice space for time
// have two arrays that correspond to the maxLeft and maxRight at index, i
// iterate through the heights and do the same logic
// accepted: Time O(n), Space O(n), n = heights.length
// const trap = heights => {
//     let result = 0
//     const maxLeft = []
//     const maxRight = []
    
//     let currMaxLeft = 0
//     let currMaxRight = 0
    
//     for (let i = 0; i < heights.length; i++) {
//         const leftHeight = heights[i]
//         const rightHeight = heights[heights.length - 1 - i]
        
//         if (leftHeight > currMaxLeft) {
//             currMaxLeft = leftHeight
//         }
        
//         if (rightHeight > currMaxRight) {
//             currMaxRight = rightHeight
//         }
        
//         maxLeft[i] = currMaxLeft
//         maxRight[heights.length - 1 - i] = currMaxRight
//     }
    
//     for (let i = 0; i < heights.length; i++) {
//         const bottleNeck = Math.min(maxLeft[i], maxRight[i])
//         const value = bottleNeck - heights[i]
        
//         if (value > 0) result += value
//     }
    
//     return result
// }

// most optimized: two pointer method to save on space
// you don't need both the maxLeft and maxRight
// you only really need to know what the min is since that is what you'll always be taking
const trap = heights => {
    let result = 0

    let left = 0
    let right = heights.length - 1
    
    let maxLeft = heights[left]
    let maxRight = heights[right]
    
    while (left < right) {
        let value;
        
        if (maxLeft <= maxRight) {
            value = maxLeft - heights[left]
            
            left++
            maxLeft = Math.max(maxLeft, heights[left])
        } else {
            value = maxRight - heights[right]
            
            right--
            maxRight = Math.max(maxRight, heights[right])
        }
        
        result += value
    }
    
    return result
}