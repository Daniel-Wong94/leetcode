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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */

// var isSubtree = function(root, subRoot) {
//     const stack = [[root, subRoot]]
//     let foundMatchingRoots = false
    
//     while (stack.length) {
//         const [root, subRoot] = stack.pop()
        
//         if (root.val === subRoot.val && !foundMatchingRoots) foundMatchingRoots = true
//         if (root.val !== subRoot.val && foundMatchingRoots) return false
        
//         if (foundMatchingRoots) {
//             if (root.left && subRoot.left) stack.push([root.left, subRoot.left])
//             if (root.right && subRoot.right) stack.push([root.right, subRoot.right])            
//         } else {
//             if (root.left) stack.push([root.left, subRoot])
//             if (root.right) stack.push([root.right, subRoot])
//         }
//     }
    
//     return false
// }

var isSubtree = function(root, subRoot) {
    const stack = [[root, subRoot]]
    
    while (stack.length) {
        const [root, subRoot] = stack.pop()
        
        if (root.val === subRoot.val && _isSubtree(root, subRoot)) return true
        
        if (root.left) stack.push([root.left, subRoot])
        if (root.right) stack.push([root.right, subRoot])
    }
    
    return false
}

var _isSubtree = function(p, q) {
    if (!p && !q) return true;                                              // when both are null, you've reached end of tree
    if (!p || !q || p.val !== q.val) return false;                          // if one of them is null, or if the vals aren't equal, then there's a difference
    return _isSubtree(p.left, q.left) && _isSubtree(p.right, q.right)       // recursively DFS the left and the right side, both conditions have to be true to return true
};




