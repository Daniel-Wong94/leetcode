/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// start off with speed of 1 and keep incrementing the speed
// until the total time to eat all piles is <= h
// TLE: O(nm)
// var minEatingSpeed = function(piles, h) {
//     let speed = 1
    
//     while (true) {
//         let time = 0
        
//         for (const pile of piles) {
//             time += Math.ceil(pile / speed)
//         }
        
//         if (time <= h) {
//             return speed
//         } else {
//             speed++
//         }
//     }
// };

// instead of trying every speed from 1
// we can BS with 1 as our lower bound (nothing can be lower than 1)
// and max(piles) as our upper bound (max will always work, so anything above that will also work)
// keep BS with those bounds until you find the min speed
const minEatingSpeed = (piles, h) => {
    let left = 0
    let right = Math.max(...piles) // O(n)
    
    // when left == right, we've found our min speed
    while (left < right) {
        const speed = Math.floor((left + right) / 2)
        
        const timeToEat = piles.reduce((a, b) => a + Math.ceil(b / speed) , 0)
        
        if (timeToEat <= h) {
            right = speed
        } else {
            left = speed + 1
        }
    }
    
    return left
}
