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
            // if there's a new smallest, it'll update
            smallest = num
        } else if (num <= secondSmallest) {
            // whenever smallest gets updated, secondSmallest will be updated next
            secondSmallest = num
        } else {
            // we only reach this when smallest < secondSmallest < num
            return true
        }
    }
    
    return false
};