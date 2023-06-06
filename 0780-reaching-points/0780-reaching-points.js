/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
// time limit exceeded
// var reachingPoints = function(sx, sy, tx, ty, memo = {}) {
//     const key = sx + "," + sy
//     if (key in memo) return memo[key]
    
//     // base cases
//     if (sx === tx && sy === ty) return true
//     if (sx > tx || sy > ty) return false
    
//     const addX = reachingPoints(sx + sy, sy, tx, ty, memo)
//     const addY = reachingPoints(sx, sy + sx, tx, ty, memo)
    
//     memo[key] = addX || addY
//     return memo[key]
// };

const reachingPoints = (sx, sy, tx, ty) => {
    // start from target and modulo your way up to source
    
    while (tx >= sx && ty >= sy) {
        if (tx === ty) break;
        
        if (tx > ty) {
            if (ty > sy) {
                tx %= ty
            } else {
                return (tx - sx) % ty === 0
            }
        } else {
            if (tx > sx) {
                ty %= tx
            } else {
                return (ty - sy) % tx === 0
            }
        }
    }
    
    return tx === sx && ty === sy
}