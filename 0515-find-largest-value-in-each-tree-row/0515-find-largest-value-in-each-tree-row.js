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
 * @return {number[]}
 */
var largestValues = function(root) {
    if (!root) return []
    const sizes = []
    const queue = [{ node: root, level: 0 }]
    
    while (queue.length) {
        const { node, level } = queue.shift()
        
        sizes[level] = Math.max(sizes[level] ?? -Infinity, node.val)
        
        if (node.left) queue.push({ node: node.left, level: level + 1 })
        if (node.right) queue.push({ node: node.right, level: level + 1 })
    }
    
    return sizes
};