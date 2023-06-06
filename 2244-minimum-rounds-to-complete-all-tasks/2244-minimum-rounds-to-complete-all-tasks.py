/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    const count = {}
    
    for (const task of tasks) {
        count[task] = count[task] + 1 || 1
    }
    console.log(count)
    let result = 0
    
    for (const num in count) {
        if (count[num] === 1) return -1
        
        if (count[num] % 3 === 0) {
            result += count[num] / 3 
        } else  {
            result += Math.floor(count[num] / 3) + 1
        }
        console.log(result)
    }
    
    return result;
};