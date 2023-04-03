class RandomizedSet {
    constructor() {
        this.map = {}
        this.list = []
    }
    
    insert(val) {
        if (this.map.hasOwnProperty(val)) return false
        
        this.map[val] = this.list.length
        this.list.push(val)
        return true;
    }
    
    remove(val) {
        if (!this.map.hasOwnProperty(val)) return false;
        
        // move last element to the place idx of the element to delete
        const lastEl = this.list[this.list.length - 1]
        const idx = this.map[val]
        this.list[idx] = lastEl
        this.map[lastEl] = idx
        
        // delete last element
        this.list.pop()
        delete this.map[val]
        return true;
    }
    
    getRandom() {
        const randomIdx = Math.floor(Math.random() * this.list.length)
        return this.list[randomIdx]
    }
}

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */