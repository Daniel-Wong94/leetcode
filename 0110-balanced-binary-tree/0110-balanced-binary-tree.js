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
    if (!root) return 0;
    
    const leftHeight = getHeight(root.left)
    const rightHeight = getHeight(root.right)
    
    if (leftHeight === -1 || rightHeight === -1) return -1;
    if (Math.abs(leftHeight - rightHeight) > 1) return -1;
    
    return 1 + Math.max(leftHeight, rightHeight)
};