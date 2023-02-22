# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def swapPairs(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head or not head.next:
            return head
        
        dummyHead = ListNode()
        current = head
        previous = dummyHead
        
        while current and current.next:
            previous.next = current.next
            current.next = current.next.next
            previous.next.next = current
            
            previous = current
            current = current.next
            
        return dummyHead.next