/**
 * @param {number[]} nums
 * @return {boolean}
 */

// keep track of first and second smallest number
// once those are found, and we find a number that's greater than second smallest number,
// that means we found the triplet
var increasingTriplet = function(nums) {
    let smallest = Infinity
    let secondSmallest = Infinity
    
    for (const num of nums) {
        if (num <= smallest) {
            smallest = num
        } else if (num <= secondSmallest) {
            secondSmallest = num
        } else {
            return true
        }
    }
    
    return false
};