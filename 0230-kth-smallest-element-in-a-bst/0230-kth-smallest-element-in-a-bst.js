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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function(root, k) {
    const order = inOrder(root)
    return order[k - 1]
};

const inOrder = root => {
    if (!root) return [];
    if (!root.left && !root.right) return [root.val]
    
    
    const left = inOrder(root.left)
    const right = inOrder(root.right)
    
    return [...left, root.val, ...right]
}