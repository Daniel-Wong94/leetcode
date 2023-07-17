/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    
    const result = []
    
    for (const [currStart, currEnd] of intervals) {
        const mostRecent = result[result.length - 1]
        if (result.length === 0 || mostRecent[1] < currStart) {
            result.push([currStart, currEnd])
        } else {
            mostRecent[1] = Math.max(mostRecent[1], currEnd)
        }
    }
    
    return result
};