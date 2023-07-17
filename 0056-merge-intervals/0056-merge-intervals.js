/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0])
    
    const result = []
    
    for (const [currStart, currEnd] of intervals) {
        const mostRecent = result[result.length - 1]
        
        // if we're on the first iteration, just push
        // if the most recent end is before the current start, then it's not overlapped
        if (result.length === 0 || mostRecent[1] < currStart) {
            result.push([currStart, currEnd])
        } else {
            // if we've sorted our intervals by start time, then we just have to update endtime
            mostRecent[1] = Math.max(mostRecent[1], currEnd)
        }
    }
    
    return result
};