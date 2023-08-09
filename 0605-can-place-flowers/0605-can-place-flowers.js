/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// every streak of three 0's allows for one flower
var canPlaceFlowers = function(flowerbed, n) {
    // inject an empty flowerbed at the beginning and end to eliminate the redundant elif statements
    const flowers = [0, ...flowerbed, 0]
        
    for (let i = 1; i < flowers.length - 1; i++) {
        if (flowers[i] === flowers[i - 1] && flowers[i] === flowers[i + 1]) {
            flowers[i] = 1
            n--
        }
        
        // exit the loop once we meet n
        if (n <= 0) return true
    }
    
    return false
};