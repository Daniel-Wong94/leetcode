/**
 * @param {number[]} time
 * @return {number}
 */
// var numPairsDivisibleBy60 = function(times) {
//     const remainders = {}
//     let result = 0
    
//     for (const time of times) {
//         const key = time % 60
        
//         if (!(key in remainders)) {
//             remainders[key] = []
//         } else {
            
//         }
        
//         remainders[key].push(time)
//     }
// };

var numPairsDivisibleBy60 = function(time) {
    let pairs = 0
    
    for (let i = 0; i < time.length; i++) {
        for (let j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 === 0) pairs++
        }
    }
    
    return pairs;
};