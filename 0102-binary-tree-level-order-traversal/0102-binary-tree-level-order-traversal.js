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
var levelOrder = function(root) {
    if (!root) return []
    const levels = []
    const stack = [ [ root, 0] ]
    
    while (stack.length) {
        const [node, level] = stack.pop()
        
        if (!levels[level]) levels[level] = [node.val]
        else levels[level].push(node.val)
        
        if (node.right) stack.push([node.right, level + 1])
        if (node.left) stack.push([node.left, level + 1])

    }
    
    return levels
};