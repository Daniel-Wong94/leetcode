/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // a palindrome consists of two even numbers of chars and an optional odd number
    // count the number of times a char shows up
    // check each char count,
    // if is greater than 1 and is even, add to evenCount
    // if it is greater than 1 but is odd, add to evenCount minus 1 and set hasOdd = true
    // if it is just 1, set hasOdd = true
    // if hasOdd is set to true at the end of the iteration, return the evenCount + 1, else just evenCount
    
    const count = {}
    
    for (const c of s) {
        count[c] = count[c] ? count[c] + 1 : 1;
    }
        
    let evenCounts = 0;
    let hasOdd = false;
    
    for(const c in count) {
        if (count[c] > 1) {
            if (count[c] % 2 === 1) {
                evenCounts += count[c] - 1
                hasOdd = true;                
            } else {
                evenCounts += count[c]
            }
        } else {
            hasOdd = true;
        }
    }
    
    
    return hasOdd ? evenCounts + 1 : evenCounts;
};