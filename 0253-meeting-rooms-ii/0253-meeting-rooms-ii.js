/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function(intervals) {
    // create one timeline of all start and end points
    const starts = intervals.map(i => i[0]).sort((a, b) => a - b)
    const ends = intervals.map(i => i[1]).sort((a, b) => a - b)
    
    // whenever a start time exceeds an end time, that means the 
    // previous end time opens up for a start time to use the same room
    // therefore, you do not need to increment rooms when pointerEnd++
    
    let pointerEnd = 0
    let rooms = 0
    
    for (const start of starts) {
        start < ends[pointerEnd] ? rooms++ : pointerEnd++
    }
    

    return rooms
};