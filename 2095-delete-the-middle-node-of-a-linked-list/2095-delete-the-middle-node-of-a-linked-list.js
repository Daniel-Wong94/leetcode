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
    let curr = head
    let length = 0
    
    while (curr) {
        length++
        curr = curr.next
    }
    
    let midIndex = Math.floor(length / 2)
    
    if (midIndex === 0) return head.next
    
    let mid = head
    let prev = new ListNode()
    
    while (midIndex > 0) {
        prev.next = mid
        mid = mid.next
        prev = prev.next
        
        midIndex--
    }
    
    prev.next = mid.next
    
    return head;
};