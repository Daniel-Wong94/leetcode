/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
// var detectCycle = function(head) {
//     const nodes = new Set()
//     let curr = head
    
//     while (curr) {
//         if (nodes.has(curr)) return curr
        
//         nodes.add(curr)
    
//         curr = curr.next
//     }
        
//     return null
// };

var detectCycle = head => {
    let slow = fast = head
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        
        if (slow === fast) break;
    }
    
    if (!fast || !fast.next) return null
    
    while (slow !== head) {
        slow = slow.next
        head = head.next
    }
    
    return head
}