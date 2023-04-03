/**
 * @param {number} n
 */
var OrderedStream = function(n) {
    this.stream = new Array(n)
    this.pointer = 0
};

/** 
 * @param {number} idKey 
 * @param {string} value
 * @return {string[]}
 */
OrderedStream.prototype.insert = function(idKey, value) {
    // update the stream
    this.stream[idKey - 1] = value
    
    // build the chunk
    const chunk = []

    // advance pointer and build chunk until undefined value is reached
    while (this.stream[this.pointer]) {
        chunk.push(this.stream[this.pointer])
        this.pointer++
    }
    
    return chunk;
};

/** 
 * Your OrderedStream object will be instantiated and called as such:
 * var obj = new OrderedStream(n)
 * var param_1 = obj.insert(idKey,value)
 */