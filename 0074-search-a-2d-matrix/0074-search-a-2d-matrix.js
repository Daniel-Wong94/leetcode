/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// // binary search
// // check where the target falls between rows[0]
// // once found, binary search within the row
// var searchMatrix = function(matrix, target) {
//     const [n , m] = [matrix.length, matrix[0].length]
//     let lo = 0, hi = n - 1, mid;
//     let row = 0;
    
//     while (lo <= hi) {
//         mid = Math.floor((hi + lo) / 2)
//         const minRow = matrix[mid][0]
//         const maxRow = matrix[mid][m - 1]
        
//         if (target < minRow) {
//             hi = mid - 1
//         } else if (target > maxRow) {
//             lo = mid + 1
//         } else {
//             row = mid
//             break;
//         }
//     }
    
    
//     lo = 0, hi = m - 1
    
//     while (lo <= hi) {
//         mid = Math.floor((hi + lo) / 2)
//         console.log(matrix[row], mid)
        
//         if (matrix[row][mid] < target) {
//             lo = mid + 1
//         } else if (matrix[row][mid] > target) {
//             hi = mid - 1
//         } else {
//             return true
//         }
//     }
    
//     return false
// };

const searchMatrix = (matrix, target) => {
  if (!matrix.length || !matrix[0].length) return false;

  let row = 0;
  let col = matrix[0].length - 1;

  while (col >= 0 && row <= matrix.length - 1) {
    const value = matrix[row][col]
    if (value === target) return true;
    else if (value > target) col--;
    else if (value < target) row++;
  }

  return false;
}