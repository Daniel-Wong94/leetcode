
class MyQueue {
    constructor() {
        this.stackA = []
        this.stackB = []
    }
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.stackA.push(x)
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.reverse()
    return this.stackB.pop()
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    this.reverse()
    return this.stackB[this.stackB.length - 1]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return !this.stackA.length && !this.stackB.length
};

MyQueue.prototype.reverse = function() {    
    if (!this.stackB.length) {
        while(this.stackA.length > 0) {
            this.stackB.push(this.stackA.pop())
        }
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
