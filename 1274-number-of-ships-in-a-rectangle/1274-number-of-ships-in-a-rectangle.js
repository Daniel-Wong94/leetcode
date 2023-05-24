/**
 * // This is Sea's API interface.
 * // You should not implement it, or speculate about its implementation
 * function Sea() {
 *     @param {integer[]} topRight
 *     @param {integer[]} bottomLeft
 *     @return {boolean}
 *     this.hasShips = function(topRight, bottomLeft) {
 *         ...
 *     };
 * };
 */

/**
 * @param {Sea} sea
 * @param {integer[]} topRight
 * @param {integer[]} bottomLeft
 * @return {integer}
 */
var countShips = function(sea, topRight, bottomLeft) {
    // divide sea into four equal parts and recursively solve each sub quadrant
    // when the topRight and bottomLeft coordinates are the same, then we've pinpointed a ship
    // if there are no ships found in a quadrant, do not recurse further
    
    // base case: no ships, then no need for further recursive search
    if (!sea.hasShips(topRight, bottomLeft)) return 0
    
    // base case: points overlap, we found a ship
    if (bottomLeft[0] === topRight[0] && bottomLeft[1] === topRight[1]) return 1
    
    // recursive step: break down into four sub quadrants
    // find midway point of sea to get the quadrants
    const midWay = [Math.floor((bottomLeft[0] + topRight[0]) / 2), Math.floor((bottomLeft[1] + topRight[1]) / 2)]
    
    // quadrant I = top-right, quadrant II = top-left, quadrant III = bottom-left, quadrant IV = bottom-right
    const quadrantI = countShips(sea, topRight, [midWay[0] + 1, midWay[1] + 1])
    const quadrantII = countShips(sea, [midWay[0], topRight[1]], [bottomLeft[0], midWay[1] + 1])
    const quadrantIII = countShips(sea, midWay, bottomLeft)
    const quadrantIV = countShips(sea, [topRight[0], midWay[1]], [midWay[0] + 1, bottomLeft[1]])
   
    // each quadrant will return a value of 1 or 0
    return quadrantI + quadrantII + quadrantIII + quadrantIV
};