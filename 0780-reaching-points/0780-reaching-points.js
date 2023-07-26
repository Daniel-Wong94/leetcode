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
        // edge case: if tx === ty then we don't know which method was used before it
        if (tx === ty) break;
        
        // if tx is greater than ty, then we know we have to take away from tx
        // since the parent node must've used x + y , y
        // the nested if statements cover for when neither tx nor ty have reached source
        // the nested else statements cover for when either the x or y have already met source
        // once one of them has met the source, you can just isolate the other and modulo the difference to see if it's reachable
        
        if (tx > ty) { // this means the previous step was adding y to x, so we have to take away y from x
            if (ty > sy) {  // check if ty has not met its sy, if not then take away y (optimize by using modulo instead)
                tx %= ty
            } else {        // if ty has met sy, we only need to solve for tx (modulo the difference between tx and sx by ty)
                return (tx - sx) % ty === 0
            }
        } else {       // this means the previous step was adding x to y, so we have to take away x from y
            if (tx > sx) {  // check if tx has met sx, if not then take away x (optimize by using modulu instead)
                ty %= tx
            } else {        // if tx has met sx, we only need to solve for ty (modulo the difference between ty and sy by tx)
                return (ty - sy) % tx === 0
            }
        }
    }
    
    return tx === sx && ty === sy
}