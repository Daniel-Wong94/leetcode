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
    const levels = []
    if (!root) return levels;
    const queue = [ root ]
    
    while (queue.length) {
        const queueLength = queue.length;
        const level = []
        
        for (let i = 0; i < queueLength; i++) {
            const current = queue.shift();
            level.push(current.val)
            
            if (current.left) queue.push(current.left)
            if (current.right) queue.push(current.right)
        }
        
        levels.push(level)
    }
    
    return levels;
};