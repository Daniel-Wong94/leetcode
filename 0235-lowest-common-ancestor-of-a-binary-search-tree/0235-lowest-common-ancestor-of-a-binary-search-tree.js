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

const lowestCommonAncestor = (root, p, q) => {
    // get the path to p and q and then check which element appears in both paths first
    const pathP = getPath(root, p.val)
    const pathQ = getPath(root, q.val)
    const setQ = new Set(pathQ.map(node => node.val))
        
    for (const node of pathP) {
        if (setQ.has(node.val)) {
            return node;
        } 
    }
};

const getPath = (root, target) => {
    if (!root) return null;
    if (root.val === target) return [root];
    
    const left = getPath(root.left, target)
    if (left) {
        left.push(root)
        return left;
    }
    
    const right = getPath(root.right, target)
    if (right) {
        right.push(root)
        return right;
    }
}  