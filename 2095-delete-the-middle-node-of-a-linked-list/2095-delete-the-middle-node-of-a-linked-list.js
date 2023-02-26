/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    let slow = fast = head
    let prev = new ListNode()
    
    while (fast && fast.next) {
        prev.next = slow
        slow = slow.next
        fast = fast.next.next
        prev = prev.next
    }
    
    if (!prev.next) return null
    prev.next = slow.next
    
    return head
};