/**
 * @param {number} n
 */
var MRUQueue = function(n) {
    this.queue = []
    
    for (let i = 1; i <= n; i++){
        this.queue.push(i)
    }
};

/** 
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function(k) {
    const value = this.queue[k - 1]
    
    for (let i = k - 1; i < this.queue.length - 1; i++) {
        this.queue[i] = this.queue[i + 1]
    }
    
    this.queue[this.queue.length - 1] = value
    
    return value
};

/** 
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */