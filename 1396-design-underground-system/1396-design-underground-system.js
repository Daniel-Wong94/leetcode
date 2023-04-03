
var UndergroundSystem = function() {
    this.checkIns = {}  // {id : {stationName, t}}
    this.routes = {} // {route: times[] }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.checkIns[id] = { stationName, t }
};

/** 
 * @param {number} id 
 * @param {string} stationName 
 * @param {number} t
 * @return {void}
 */
UndergroundSystem.prototype.checkOut = function(id, endStationName, t) {
    const {stationName : startStationName, t : checkInTime } = this.checkIns[id]
    const route = startStationName + "-" + endStationName
    
    if (!this.routes.hasOwnProperty(route)) this.routes[route] = []
    this.routes[route].push(t - checkInTime)
};

/** 
 * @param {string} startStation 
 * @param {string} endStation
 * @return {number}
 */
UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const route = startStation + "-" + endStation
    const times = this.routes[route]
    let totalTime = 0
    
    for (const time of times) {
        totalTime += Number(time)
    }
    
    return totalTime / times.length
};

/** 
 * Your UndergroundSystem object will be instantiated and called as such:
 * var obj = new UndergroundSystem()
 * obj.checkIn(id,stationName,t)
 * obj.checkOut(id,stationName,t)
 * var param_3 = obj.getAverageTime(startStation,endStation)
 */