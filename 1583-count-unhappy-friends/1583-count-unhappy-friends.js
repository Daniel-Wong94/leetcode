/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
var unhappyFriends = function(n, preferences, pairs) {
    const ranks = makeRank(n, preferences, pairs)
    
    let unhappy = 0
    
    for (let i = 0; i < n; i++) {
        for (const pref of ranks[i]) {
            if (ranks[pref].includes(i)) {
                unhappy++
                break;
            }
        }
    }
    
    return unhappy;
};

const makeRank = (n, preferences, pairs) => {
    const prefersMore = {}

    for (const [a, b] of pairs) {
        prefersMore[a] = preferences[a].slice(0, preferences[a].indexOf(b))
        prefersMore[b] = preferences[b].slice(0, preferences[b].indexOf(a))    
    }
    
    return prefersMore
}
