/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function(root1, root2) {
    // if one of the children do not exist, then the parent will point to one of them
    if (!root1) return root2
    if (!root2) return root1
    
    // if both exists, just add root2.val to root1.val
    root1.val += root2.val
    
    // recurse left and right, assuming it will return a node with updated value
    root1.left = mergeTrees(root1.left, root2.left)
    root1.right = mergeTrees(root1.right, root2.right)
    
    // if both nodes exists, this will return the updated root1 node
    return root1
};