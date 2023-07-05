/**
 * @param {string} colors
 * @return {boolean}
 */

// get the number of moves for A and B
// if there's AAABAAABBB, we know that it's impossible for that first B to be picked
// for each streak, if it's a length > 3, moves is length - 2
// who ever has the least amount of moves will run out first and lose
var winnerOfGame = function(colors) {
    colors += "!"
    let movesA = movesB = 0
    let previousColor = colors[0]
    let streak = 0
    
    for (const color of colors) {
        if (color === previousColor) streak++
        else {
            // subtract the length of the streak by 2 to get the number of moves
            if (previousColor === "A" && streak >= 3) movesA += streak - 2 
            if (previousColor === "B" && streak >= 3) movesB += streak - 2 
            previousColor = color
            streak = 1
        }
    }
// if we are allowed to concat a stopper like "!" then we don't need these lines of code
//     if (previousColor === "A" && streak >= 3) movesA += streak - 2 
//     if (previousColor === "B" && streak >= 3) movesB += streak - 2 
    

    return movesA > movesB
};