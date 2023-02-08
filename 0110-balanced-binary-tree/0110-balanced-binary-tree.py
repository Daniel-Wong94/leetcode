# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
    def isBalanced(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if not root: return True
        if self.getHeight(root) == -1: return False
        return True
    
    def getHeight(self, root):
        if not root: return 0
        
        leftHeight = self.getHeight(root.left)
        rightHeight = self.getHeight(root.right)
        
        if leftHeight == -1 or rightHeight == -1:
            return -1
        if abs(leftHeight - rightHeight) > 1:
            return -1
        
        return 1 + max(leftHeight, rightHeight)