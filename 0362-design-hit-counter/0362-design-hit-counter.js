
var HitCounter = function() {
    this.counter = []
};

/** 
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function(timestamp) {
    this.counter.push(timestamp)
};

/** 
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function(timestamp) {
    const earliest = timestamp - 300
    
    let i = 0
    
    while (i < this.counter.length) {
        if (this.counter[i] > earliest) {
            return this.counter.length - i
        }
        
        i++
    }
    
    return 0
};

/** 
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */