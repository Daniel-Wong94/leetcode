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
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    let diameter = 0
    
    const longest = (root) => {
        if (!root) return 0;
    
        // recurse to get longest left and right path
        const maxLeftPath = longest(root.left)
        const maxRightPath = longest(root.right)
        
        // update the longest diameter at each node
        diameter = Math.max(diameter, maxLeftPath + maxRightPath)

        // returns the longest side plus the current node
        return 1 + Math.max(maxLeftPath, maxRightPath) 
    }
    
    longest(root)
    
    return diameter
};