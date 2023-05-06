/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    // if both even, divide high - low by 2
    // if both odd, divide high - low by 2 + 1
    // if one odd, divide high - low by 2 + 1
    // 2, 3, 4, 5, 6, 7 = 3
    if (low % 2 === 0 && high % 2 === 0) {
        return Math.floor((high - low) / 2)
    } else {
        return Math.floor((high - low) / 2) + 1
    }
};