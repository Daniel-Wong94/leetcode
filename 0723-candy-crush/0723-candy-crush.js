/**
 * @param {number[][]} board
 * @return {number[][]}
 */
const candyCrush = board => {
    let isStable = true
    
    // check rows for >= 3 matches, negative mark them
    for (let row = 0; row < board.length - 2; row++) {
        for (let col = 0; col < board[row].length; col++) {
            const candy1 = Math.abs(board[row][col])
            const candy2 = Math.abs(board[row + 1][col])
            const candy3 = Math.abs(board[row + 2][col])
            
            if (candy1 !== 0 && candy1 === candy2 && candy2 === candy3) {
                board[row][col] = -candy1
                board[row + 1][col] = -candy2
                board[row + 2][col] = -candy3
                isStable = false
            }
        }
    }
        
    // check cols for >= 3 matches, negative mark them
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[row].length - 2; col++) {
            const candy1 = Math.abs(board[row][col])
            const candy2 = Math.abs(board[row][col + 1])
            const candy3 = Math.abs(board[row][col + 2])
            
            if (candy1 !== 0 && candy1 === candy2 && candy2 === candy3) {
                board[row][col] = -candy1
                board[row][col + 1] = -candy2
                board[row][col + 2] = -candy3
                isStable = false
            }
        }
    }
    
        
    //drop logic, only run if board is unstable
    if (!isStable) {
        // for each column, iterate up the rows
        for (let col = 0; col < board[0].length; col++) {
            // pointer for keeping track of the top of the filled column
            let filledColumn = board.length - 1;
            for (let row = board.length - 1; row >= 0; row--) {
                // if candy is not crushed, move it to bottom pointer
                if (board[row][col] > 0) {
                    board[filledColumn][col] = board[row][col];
                    filledColumn--;
                }
                // else if it's been crushed keep the pointer at the empty space
            }
            
            // iterate up from top of filled column and fill the gaps with 0's
            for (let row = filledColumn; row >= 0; row--) {
                board[row][col] = 0;
            }
        }
    }

    return isStable ? board : candyCrush(board)
}