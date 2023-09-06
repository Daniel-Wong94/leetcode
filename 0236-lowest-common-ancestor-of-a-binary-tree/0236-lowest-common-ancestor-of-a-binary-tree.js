/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    // base case: reach null or reach p or q
    if (!root) return false
    if (root === p || root === q) return root
    
    // recursively step left and right
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p , q)
    
    // left and right will return either null or a TreeNode
    // if both nodes have not been found, only return the one that has been found
    return left && right ? root : left || right
}