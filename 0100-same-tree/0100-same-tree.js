/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
    if (!p && !q) return true;                                              // when both are null, you've reached end of tree
    if (!p || !q || p.val !== q.val) return false;                          // if one of them is null, or if the vals aren't equal, then there's a difference
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)       // recursively DFS the left and the right side, both conditions have to be true to return true
};