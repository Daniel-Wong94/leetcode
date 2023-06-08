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
 * @param {number} targetSum
 * @return {boolean}
 */

// var hasPathSum = function(root, targetSum) {
//     if (!root) return false;
    
//     const stack = [ [root, targetSum] ]
    
//     while (stack.length) {
//         const [ node, target ] = stack.pop()
        
//         if (!node.left && !node.right && node.val === target) return true; 
        
//         if (node.left) stack.push([node.left, target - node.val])
//         if (node.right) stack.push([node.right, target - node.val])
//     }
    
//     return false;
// };

const hasPathSum = (root, target) => {
    if (!root) return false
    if (!root.left && !root.right && root.val === target) return true
    return hasPathSum(root.left, target - root.val) || hasPathSum(root.right, target - root.val)
}