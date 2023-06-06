/**
 * @param {character[][]} picture
 * @return {number}
 */

// keep track of the number of "B" in each row and col
// when both the row and col only has one "B", increment count
var findLonelyPixel = function(picture) {
    const bInRows = []
    const bInCols = []
    let count = 0;
    
    for (let row = 0; row < picture.length; row++) {
        for (let col = 0; col < picture[row].length; col++) {
            if (bInRows[row] === undefined) bInRows[row] = 0
            if (bInCols[col] === undefined) bInCols[col] = 0
            
            if (picture[row][col] === "B") {
                bInRows[row]++
                bInCols[col]++
            }
        }
    }
    
    // check the rows and cols for 1
    for (let i = 0; i < picture.length; i++) {
        for (let j = 0; j < picture[i].length; j++) {
            if (picture[i][j] === "B" && bInRows[i] === 1 && bInCols[j] === 1) {
                count++
            } 
        }
    }
    
    return count;
}