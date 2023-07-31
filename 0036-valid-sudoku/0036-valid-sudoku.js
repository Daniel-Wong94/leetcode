/**
 * @param {character[][]} board
 * @return {boolean}
 */
// var isValidSudoku = function(board) {
//   // check each row, check each col, check each box
//     for (const row of board) {
//         if (!isValidRow(row)) return false
//     }
    
//     for (let i = 0; i < board.length; i++) {
//         const col = board.map(row => row[i])    
//         if(!isValidRow(col)) return false
//     }
    
//     const box = {};
    
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board.length; j++) {
//             if (board[i][j] === ".") continue;
//             const row = Math.floor(i / 3)
//             const col = Math.floor(j / 3)
//             const key = row + "," + col
            
//             if (!(key in box)) box[key] = new Set()
            
//             if (box[key].has(board[i][j])) return false
//             box[key].add(board[i][j])
//             }
//     }
    
//     return true
// };

// const isValidRow = row => {
//     const visited = new Set()
//     let nums = 0
    
//     for (const num of row) {
//         if (num !== ".") {
//             nums++
//             visited.add(num)
//         }
//     }
    
//     return visited.size === nums
// }

const isValidSudoku = board => {
    const N = board.length
    
    // can't do: Array(N).fill(new Array(N).fill(0)) -> same reference subarray
    const rows = Array.from({ length: N }, () => Array(N).fill(0));
    const cols = Array.from({ length: N }, () => Array(N).fill(0));
    const boxes = Array.from({ length: N }, () => Array(N).fill(0));
    
    // use the board[row][col] - 1 value as the position for each rows, cols, boxes array
    // the position is used as a marker for a visited value
    for (let row = 0; row < N; row++) {
        for (let col = 0; col < N; col++) {
            if (board[row][col] === ".") continue;
            const pos = board[row][col] - 1
            
            // check row
            if (rows[row][pos] === 1) return false
            rows[row][pos] = 1

            // check col
            if (cols[col][pos] === 1) return false
            cols[col][pos] = 1
            
            // check box
            const boxIdx = 3 * Math.floor(row / 3) + Math.floor(col / 3)
            if (boxes[boxIdx][pos] === 1) return false
            boxes[boxIdx][pos] = 1
        }
    }
    
    return true
}


