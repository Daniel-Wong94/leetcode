/**
 * @param {number[]} nums
 * @return {number}
 */

// rules for valid triangle:
// sideA + sideB > sideC
// sideB + sideC > sideA
// sideC + sideA > sideB
// using this logic, if you know a combination of two sides,
// you can calculate if the third side is a valid triangle
// similar to 3sum problem

// TLE: O(n ^ 3)
// var triangleNumber = function(nums) {
//     let validTriangles = 0
    
//     for (let i = 0; i < nums.length; i++) {
//         const sideA = nums[i]
        
//         for (let j = i + 1; j < nums.length; j++) {
//             const sideB = nums[j]
            
//             for (let x = j + 1; x < nums.length; x++) {
//                 const sideC = nums[x]
                
//                 if (isValidTriangle(sideA, sideB, sideC)) {
//                     console.log(sideA, sideB, sideC)
//                     validTriangles++
//                 }
//             }
//         }
//     }
    
//     return validTriangles;
// };

// const isValidTriangle = (sideA, sideB, sideC) => {
//     const checkA = sideB + sideC > sideA
//     const checkB = sideA + sideC > sideB
//     const checkC = sideA + sideB > sideC
    
//     return checkA && checkB && checkC
// }

// optimization: you do NOT need to satisfy all three conditions for validating triangle
// you only need to satisfy sideA + sideB > sideC if sideA <= sideB <= sideC
// sort the array and do 3sum
// Time: O(n^2 log (n))
const triangleNumber = nums => {
    // sort array
    nums.sort((a, b) => a - b)
    
    let count = 0
    
    // iterate and keep sideA <= sideB
    for (let sideA = 0; sideA < nums.length - 2; sideA++) {
        // left bounds of binary search
        const left = sideA + 2
        
        // keeping sideB >= sideA
        for (let sideB = sideA + 1; sideB < nums.length - 1 && nums[sideA] !== 0; sideB++) {
            // sideC needs to be greater than target (sideA + sideB)
            const maxValidSideC = nums[sideA] + nums[sideB]
            
            // index of where the minimum valid sideC
            const sideC = binarySearch(nums, left, nums.length - 1, maxValidSideC)
            
            // we know that from maxValidSideC to sideB are all valid sideC's because array is sorted
            count += sideC - sideB - 1
        }
    }
    
    return count
}

// search for the index of the minimum valid sideC and return it
const binarySearch = (nums, left, right, target) => {
    while (right >= left && right < nums.length) {
        const mid = Math.floor((left + right) / 2)
        
        if (nums[mid] >= target) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }
    
    return left
}

// most optimized solution: 
