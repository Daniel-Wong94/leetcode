
var Logger = function() {
    this.logs = {}
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (!this.logs.hasOwnProperty(message)) {
        this.logs[message] = [timestamp]
        return true
    } else {
        const lastLog = this.logs[message][this.logs[message].length - 1]
        
        if (timestamp - lastLog >= 10) {
            this.logs[message].push(timestamp)
            return true           
        } else {
            return false
        }
    }
    
};

/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */