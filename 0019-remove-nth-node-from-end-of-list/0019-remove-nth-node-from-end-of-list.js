/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    // create a dummy node in case you're removing first node
    let dummy = new ListNode()
    let behind = curr = dummy
    
    // connect dummy to head
    behind.next = head
    
    // advance curr while keeping track of distance between behind and curr pointers
    let distance = 0
    while (curr) {
        // once distance is met, start advancing behind pointer
        if (distance > n) behind = behind.next
        
        curr = curr.next
        distance++
    }

    // behind pointer should be the node behind the node you want to remove
    behind.next = behind.next.next
    
    // if removing the head, behind would be at dummy and dummy.next will be the node after head
    return dummy.next;
};