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
    if (!root || root === p || root === q) return root
    
    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p , q)
    
    if (left && right) return root
    else return left || right
};

// function lowestCommonAncestor(root, p, q) {
//   if (!root || root === p || root === q) return root;
//   var resL = lowestCommonAncestor(root.left, p, q);
//   var resR = lowestCommonAncestor(root.right, p, q);
//   return (resL && resR) ? root : (resL || resR);
// }