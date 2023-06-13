/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0] || a[1] - b[1])

    let result = 0
    let prev = intervals[0]
    
    for (let i = 1; i < intervals.length; i++) {
        const curr = intervals[i]
        
        if (curr[0] < prev[1]) {
            result++
            prev = prev[1] < curr[1] ? prev : curr
        } else {
            prev = curr
        }
    }
    
    return result
};