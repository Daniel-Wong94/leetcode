# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution:
    def mergeTwoLists(self, list1: Optional[ListNode], list2: Optional[ListNode]) -> Optional[ListNode]:
        list1_curr = list1
        list2_curr = list2
        dummy_head = ListNode()
        curr = dummy_head
        
        while list1_curr and list2_curr:
            if list1_curr.val <= list2_curr.val:
                curr.next = list1_curr
                list1_curr = list1_curr.next
                curr = curr.next
            else:
                curr.next = list2_curr
                list2_curr = list2_curr.next
                curr = curr.next
                
        if hasattr(list1_curr, "next"):
            curr.next = list1_curr
        if hasattr(list2_curr, "next"):
            curr.next = list2_curr
            
        return dummy_head.next