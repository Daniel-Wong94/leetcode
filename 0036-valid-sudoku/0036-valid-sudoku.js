/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  // check each row, check each col, check each box
    for (const row of board) {
        if (!isValidRow(row)) return false
    }
    
    for (let i = 0; i < board.length; i++) {
        const col = board.map(row => row[i])    
        if(!isValidRow(col)) return false
    }
    
    const box = {};
    
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board.length; j++) {
            if (board[i][j] === ".") continue;
            const row = Math.floor(i / 3)
            const col = Math.floor(j / 3)
            const key = row + "," + col
            console.log(key)
            
            if (!(key in box)) box[key] = new Set()
            
            if (box[key].has(board[i][j])) return false
            box[key].add(board[i][j])
            
            console.log(box)
        }
    }
    
    return true
};

const isValidRow = row => {
    const visited = new Set()
    let nums = 0
    
    for (const num of row) {
        if (num !== ".") {
            nums++
            visited.add(num)
        }
    }
    
    return visited.size === nums
}
