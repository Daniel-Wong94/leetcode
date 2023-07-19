/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
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