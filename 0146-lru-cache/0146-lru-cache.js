/**
 * @param {number} capacity
 */

// use a Map: access key in O(1) and remembers order of insertion
var LRUCache = function(capacity) {
    this.capacity = capacity
    this.cache = new Map()
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (!this.cache.has(key)) return -1
    
    const val = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, val)
    
    return this.cache.get(key)
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.cache.has(key)) {
        this.cache.delete(key)
    }
    
    this.cache.set(key, value)
    
    if (this.cache.size > this.capacity) {
        const recent = this.cache.keys().next()
        this.cache.delete(recent.value)
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */