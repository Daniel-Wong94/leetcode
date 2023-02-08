/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
    // a palindrome consists of two even numbers of chars and an optional odd number
    // count the number of times a char shows up
    // add up all the even numbers
    // if there is an odd count left over, add one
    // else just return the pairs summed up
    // if there are no even pairs, then just return 1 for the length of any 1 char combination
    
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