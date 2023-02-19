/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    // decision tree: add open and add close
    // prune the tree to reduce iterations
    // global result
    const result = []

    const getCombos = (str="", open=0, close=0) => {
        // pruning condition
        if (open > n || close > n || close > open) return;

        // base case
        if (open === close && str.length === n * 2) {
            result.push(str)
            return
        }

        const addOpen = getCombos(str + "(", open + 1, close)
        const addClose = getCombos(str + ")", open, close + 1)
    }
    
    getCombos()
    
    return result;
};