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
var goodNodes = function(root, max = -Infinity) {
    // base case: leaf node
    if (!root) return 0;
    
    // recursive step left and right
    const left = goodNodes(root.left, Math.max(max, root.val))
    const right = goodNodes(root.right, Math.max(max, root.val))
    
    // return value of 1 if node is "good"
    const isGoodNode = root.val >= max
    
    return isGoodNode ? 1 + left + right : left + right
};

// var goodNodes = function (root) {
//     const stack = [ root ]
//     let count = 0
    
//     while (stack.length) {
//         const curr = stack.pop()
        
//         if (curr.left && curr.val <= curr.left.val) {
//             count++
//         }
        
//         if (curr.right && curr.val <= curr.right.val) {
//             count++
//         }
        
//         if (curr.left) stack.push(curr.left)
//         if (curr.right) stack.push(curr.right)
//     }
    
//     return count;
// }