
var Leaderboard = function() {
    this.scores = {}
};

/** 
 * @param {number} playerId 
 * @param {number} score
 * @return {void}
 */
Leaderboard.prototype.addScore = function(playerId, score) {
    if (!this.scores.hasOwnProperty(playerId)) this.scores[playerId] = 0
    this.scores[playerId] += score
    
};

/** 
 * @param {number} K
 * @return {number}
 */
Leaderboard.prototype.top = function(K) {
    const scores = Object.values(this.scores).sort((a, b) => b - a)
    let total = 0
    
    for (let i = 0; i < K; i++) {
        total += scores[i]
    }
    
    return total;
};

/** 
 * @param {number} playerId
 * @return {void}
 */
Leaderboard.prototype.reset = function(playerId) {
    delete this.scores[playerId]
};

/** 
 * Your Leaderboard object will be instantiated and called as such:
 * var obj = new Leaderboard()
 * obj.addScore(playerId,score)
 * var param_2 = obj.top(K)
 * obj.reset(playerId)
 */