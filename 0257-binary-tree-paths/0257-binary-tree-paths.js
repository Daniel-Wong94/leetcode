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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if (!root) return []
    if (!root.left && !root.right) return [`${root.val}`]
    
    const paths = []
    
    const left = binaryTreePaths(root.left)
    for (const sub of left) {
        paths.push(`${root.val}->${sub}`)
    }
    
    const right = binaryTreePaths(root.right)
    for (const sub of right) {
        paths.push(`${root.val}->${sub}`)
    }
    
    return paths;
};