/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, color) {
    const startColor = image[sr][sc]
    const stack = [[sr, sc]]
    const deltas = [[1, 0], [-1, 0], [0, 1], [0, -1]]
    const visited = new Set()

    while (stack.length) {
        const [x, y] = stack.pop()
        
        if (!visited.has(x + " " + y)) {

            image[x][y] = color;

            for (delta of deltas) {
                const [deltaX, deltaY] = delta;
                const [newX, newY] = [x + deltaX, y + deltaY]

                if (0 <= newX && newX < image.length && 0 <= newY && newY < image[x].length) {
                    visited.add(x + ' ' + y)
                    console.log(newX, newY)
                    if (image[newX][newY] === startColor) {
                        stack.push([newX, newY])
                    }

                }
            }
        }

    }

    return image;
};