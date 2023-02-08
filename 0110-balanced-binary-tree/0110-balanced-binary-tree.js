/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    // Base case
    if (!root) return true;
    // getHeight will return -1 if at any node, the tree is unbalanced
    if (getHeight(root) === -1) return false;
    return true;
}

// return the height of left / right branches if still balanced, otherwise, bubble up a return value of -1
var getHeight = function(root) {
    // Base case for leaf nodes
    if (!root) return 0;
    
    // recursive dfs both branches
    const leftHeight = getHeight(root.left)
    const rightHeight = getHeight(root.right)
    
    // checks for unbalance and bubbles up the -1
    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    
    // if it hits this line, subtree is still balanced
    return 1 + Math.max(leftHeight, rightHeight)
};