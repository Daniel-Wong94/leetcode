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
// var goodNodes = function(root, max = -Infinity) {
//     // base case: leaf node
//     if (!root) return 0;
    
//     // recursive step left and right
//     const left = goodNodes(root.left, Math.max(max, root.val))
//     const right = goodNodes(root.right, Math.max(max, root.val))
    
//     // return value of 1 if node is "good"
//     const isGoodNode = root.val >= max
    
//     return isGoodNode ? 1 + left + right : left + right
// };

var goodNodes = function (root) {
    const stack = [ { node: root, max : root.val } ]
    let count = 0
    
    while (stack.length) {
        let { node, max } = stack.pop()
        
        if (node.val >= max) count++;
        
        max = Math.max(max, node.val)
        
        if (node.left) stack.push({ node: node.left, max})
        if (node.right) stack.push({ node: node.right, max})
    }
    
    return count;
}