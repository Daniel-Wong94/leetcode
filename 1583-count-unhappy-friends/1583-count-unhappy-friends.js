/**
 * @param {number} n
 * @param {number[][]} preferences
 * @param {number[][]} pairs
 * @return {number}
 */
const unhappyFriends = (n, preferences, pairs) => {
    // map out the preferences of each person greater than their partner
    const betterPartners = getBetterPartners(preferences, pairs)
    
    let unhappy = 0
    
    // if a greater preference is found in each of two friends, they are unhappy
    for (let person = 0; person < n; person++) {
        for (const betterPartner of betterPartners[person]) {
            // must break to prevent duplicate when reaching the other side of the unhappy partnership
            if (betterPartners[betterPartner].includes(person)) {
                unhappy++
                break;
            }
        }
    }
    
    return unhappy;
};

const getBetterPartners = (preferences, pairs) => {
    const betterPartners = {}

    // slice up to the index of the partner
    for (const [a, b] of pairs) {
        betterPartners[a] = preferences[a].slice(0, preferences[a].indexOf(b))
        betterPartners[b] = preferences[b].slice(0, preferences[b].indexOf(a))    
    }
    
    return betterPartners
}
