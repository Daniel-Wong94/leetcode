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
 * @return {number[][]}
 */
var verticalOrder = function(root) {
    if (!root) return []
    const result = {}
    const queue = [ [root, 0] ]
    
    while (queue.length) {
        const [node, level] = queue.shift()
        
        if (!result.hasOwnProperty(level)) {
            result[level] = []
        }
        
        result[level].push(node.val)
        
        if (node.left) queue.push([node.left, level - 1])
        if (node.right) queue.push([node.right, level + 1])
    }
    
    return Object.entries(result).sort((a, b) => Number(a[0]) - Number(b[0])).map(a => a[1])
};