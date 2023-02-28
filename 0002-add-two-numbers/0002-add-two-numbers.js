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
    
    const lastNode = new ListNode()
    
    if (carry > 0) {
        lastNode.val = carry
        curr.next = lastNode
    }
    
    return dummy.next
};