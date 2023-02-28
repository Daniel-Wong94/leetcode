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
    // check if there's a cycle
    let slow = fast = head
    
    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
        
        if (slow === fast) break;
    }
    
    // when exiting the loop, you either have cycle or no cycle
    if (!fast || !fast.next) return null
    
    // if there is still cycle, the distance from slow coming around the corner of the cycle 
    // is the same as the distance from head to the start of the cycle
    while (slow !== head) {
        slow = slow.next
        head = head.next
    }
    
    return head
}