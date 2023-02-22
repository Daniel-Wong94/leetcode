/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    // starting node
    this.page = {
        url: homepage,
        back: null,
        forward: null
    }
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    // create next node like a doubly linked list
    this.page.forward = {
        url,
        back : this.page,
        forward: null
    }
    
    // increment node
    this.page = this.page.forward
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    // iterate steps and move pointer
    while (steps && this.page.back) {
        this.page = this.page.back
        steps--
    }
    
    return this.page.url
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    while (steps && this.page.forward) {
        this.page = this.page.forward
        steps--
    }
    
    return this.page.url
};



/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */