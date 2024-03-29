/**
 * @param {number} capacity
 */

// use a Map: access key in O(1) and remembers order of insertion
class LRUCache {
    constructor(capacity) {
        this.capacity = capacity
        this.cache = new Map()
    }
     /** 
     * @param {number} key
     * @return {number}
     */ 
    get = (key) => {
        if (!this.cache.has(key)) return -1

        // get and save the value, then re-set the key to move the order up
        const val = this.cache.get(key)
        this.cache.delete(key)
        this.cache.set(key, val)

        return this.cache.get(key)    
    }
    /** 
     * @param {number} key 
     * @param {number} value
     * @return {void}
     */
    put = (key, value) => {
        if (this.cache.has(key)) {
            this.cache.delete(key)
        }

        this.cache.set(key, value)

        if (this.cache.size > this.capacity) {
            const recent = this.cache.keys().next()
            this.cache.delete(recent.value)
        }
    }
};

/** 
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */