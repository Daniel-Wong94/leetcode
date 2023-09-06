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

// recursively look for node p and q
// once found, return the current root node
var lowestCommonAncestor = function(root, p, q) {
    // base case: reach null or reach p or q
    if (!root) return false
    if (root === p || root === q) return root
    
    // recursively step left and right
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p , q)
    
    // left and right will return either false or a TreeNode
    // returns the LCA when both nodes are found, or just returns the found node
    return left && right ? root : left || right
}

