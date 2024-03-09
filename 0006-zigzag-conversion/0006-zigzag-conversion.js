/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s;
    const rows = []

    for (let i = 0; i < numRows; i++) {
        rows[i] = [];
    }

    let down = false;
    let currRow = 0;

    for (let i = 0; i < s.length; i++) {
        if (currRow <= 0 || currRow >= numRows - 1) {
            down = !down;
        }

        rows[currRow].push(s[i])

        currRow = down ? currRow + 1 : currRow - 1;
    }

    let result = "";

    for (const chars of rows) {
        result += chars.join('')
    }

    return result;
};