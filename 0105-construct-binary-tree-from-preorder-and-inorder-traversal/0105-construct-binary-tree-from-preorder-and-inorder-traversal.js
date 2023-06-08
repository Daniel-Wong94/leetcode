/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    // edge case
    if (!inorder.length) return null
    
    // root value is always the first element in the preorder array
    const rootVal = preorder[0]
    
    // create the new root node
    const root = new TreeNode(rootVal)
    
    // using the known root value, find where the root is in the inorder
    const mid = inorder.indexOf(rootVal)
    
    // split the inorder into two branches, excluding the root
    const leftInorder = inorder.slice(0, mid)
    const rightInorder = inorder.slice(mid + 1)
    
    // split the preorder into two branches, excluding the first node (root)
    const leftPreorder = preorder.slice(1, leftInorder.length + 1)
    const rightPreorder = preorder.slice(leftInorder.length + 1)
    
    // recursively build the tree
    root.left = buildTree(leftPreorder, leftInorder)
    root.right = buildTree(rightPreorder, rightInorder)
    
    return root;
};
