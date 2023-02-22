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
        if (char === "L") {
            if (previous === "L") {
                lateness++   
                if (lateness === 3) return false
            } else {
                lateness = 1;
            }
        }
        
        previous = char;
    }
    
    return totalAbsence < 2
};