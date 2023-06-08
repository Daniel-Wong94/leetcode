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
 * @return {TreeNode}
 */
var bstFromPreorder = function(preorder) {
    if (!preorder.length) return null
    
    const inorder = preorder.slice().sort((a, b) => a - b)
    
    return build(inorder, preorder)
};

const build = (inorder, preorder) => {
    if (!inorder.length) return null
    
    const rootVal = preorder[0]
    const root = new TreeNode(rootVal)
    
    const mid = inorder.indexOf(rootVal)
    const leftInorder = inorder.slice(0, mid)
    const rightInorder = inorder.slice(mid + 1)
    
    const leftPreorder = preorder.slice(1, leftInorder.length + 1)
    const rightPreorder = preorder.slice(leftInorder.length + 1)
    
    root.left = build(leftInorder, leftPreorder)
    root.right = build(rightInorder, rightPreorder)
    
    return root
}