/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

// get the slope between the first two coordinates
// compare this slope with every slope between coordinate[0] and coordinate[i] 
// if deltaY1 / deltaX1 is the slope of coordinate[0] and [1]
// then deltaY2 / deltaX2 of coordinate[0] and [i] should equal that
// deltaY1 * deltaX2 === deltaY2 * deltaX1
var checkStraightLine = function(coordinates) {
    const deltaY = coordinates[1][1] - coordinates[0][1]
    const deltaX = coordinates[1][0] - coordinates[0][0]
          
    for (let i = 2; i < coordinates.length; i++) {
        const diffX = coordinates[i][0] - coordinates[0][0]
        const diffY = coordinates[i][1] - coordinates[0][1]

        if (deltaY * diffX !== deltaX * diffY) {
            return false
        }
    }
    
    return true
};