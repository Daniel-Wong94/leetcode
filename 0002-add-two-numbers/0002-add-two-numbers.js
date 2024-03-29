/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// scenarios: 
// one of the linked list is at null already
// you have to carry over a value
var addTwoNumbers = function(l1, l2) {
    const dummy = new ListNode()
    let curr = dummy;
    let carry = 0;
    
    while (l1 || l2) {
        const sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry
        
        carry = Math.floor(sum / 10)
        const node = sum > 9 ? new ListNode(sum % 10) : new ListNode(sum)
        
        curr.next = node
        curr = curr.next
        
        if (l1) l1 = l1.next
        if (l2) l2 = l2.next
    }
    
    if (carry > 0) curr.next = new ListNode(carry)
    
    return dummy.next
};