/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    const starts = intervals.map(i => i[0]).sort((a, b) => a - b)
    const ends = intervals.map(i => i[1]).sort((a, b) => a - b)
    const n = intervals.length

    let pointerEnd = 0
    let rooms = 0
    
    for (const start of starts) {
        if (start < ends[pointerEnd]) {
            rooms++
        } else {
            pointerEnd++
        }
    }
    

    return rooms
};