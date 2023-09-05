/**
 * @param {number} num
 * @return {string}
 */
var toHex = function(num) {
    // map out the hex values
    const HEX = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
    
    // edge cases:
    if (num === 0) return HEX[num]
    
    // two's complement for negative num
    if (num < 0) num += 2 ** 32
    
    let res = ""
    
    while (num > 0) {
        const remainder = num % 16
        res = HEX[remainder] + res
        num = Math.floor(num / 16)
    }
    
    return res
};
