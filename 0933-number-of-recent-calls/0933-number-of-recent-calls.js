
var RecentCounter = function() {
    this.counter = []
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.counter.push(t)
    
    let recentRequests = 0
    const range = t - 3000
    
    for (const request of this.counter) {
        if (request >= range) recentRequests++
    }
    
    return recentRequests
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */