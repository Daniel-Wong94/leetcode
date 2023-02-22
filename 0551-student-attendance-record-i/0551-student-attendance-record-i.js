/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
    let lateness = 0;
    let totalAbsence = 0;
    let previous;
    
    for (const char of s) {
        if (char === "A") totalAbsence++
        if (char === "L") lateness = previous === "L" ? lateness + 1 : 1
        if (lateness === 3) return false;
        previous = char;
    }
    
    return totalAbsence < 2
};