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
 * @return {boolean}
 */
// const isValidBST = root => {
//     const inOrderArr = inOrder(root);
    
//     for (let i = 0; i < inOrderArr.length; i++) {
//         if (inOrderArr[i] > inOrderArr[i + 1]) return false;
//     }
    
//     return true;
// }

// const inOrder = root => {
//     if (!root) return [];
//     const left = inOrder(root.left);
//     const right = inOrder(root.right);
//     return [...left, root.val, ...right]
// }

const isValidBST = (root, low=-Infinity, high=Infinity) => {
    if (!root) return true;
    
    if (root.val <= low || root.val >= high) return false
    
    const left = isValidBST(root.left, low, root.val)
    const right = isValidBST(root.right, root.val, high)
        
    return left && right
}