/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    let result = null
    
    const dfs = curr => {
        if (!curr) return false
        
        const left = dfs(curr.left) ? 1 : 0
        const right = dfs(curr.right) ? 1 : 0
        const mid = curr === p || curr === q ? 1 : 0
        
        if (left + right + mid >= 2) {
            result = curr
            return true
        }
        
        return left + right + mid > 0
    }
    
    dfs(root)
    return result
};