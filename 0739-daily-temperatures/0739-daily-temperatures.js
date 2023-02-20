/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    // initialize resulting array with 0's
    const result = Array(temperatures.length).fill(0)
    
    // stack will hold subarrays of [prevTemp, prevIdx]
    const stack = []
    
    for (let currIdx = 0; currIdx < temperatures.length; currIdx++) {
        const currTemp = temperatures[currIdx]

        // if stack is not empty and the top prevTemp is less than currTemp
        while (stack.length > 0 && stack[stack.length - 1][0] < currTemp) {
            const [prevTemp, prevIdx] = stack.pop()
            
            // use the difference in Idx as answer[i]
            result[prevIdx] = currIdx - prevIdx
        }
        
        // else, push the currTemp and its Idx to the stack
        stack.push([currTemp, currIdx])
    }
    
    // any answer[i] without future days will default to 0
    return result;
};