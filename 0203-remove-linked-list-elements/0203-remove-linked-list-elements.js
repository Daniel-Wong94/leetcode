/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
    let dummyHead = new ListNode()
    let current = head
    let previous = dummyHead
    
    dummyHead.next = current
    
    while (current) {
        if (current.val === val) {
            current = current.next
            previous.next = current
            continue
        }    
        
        previous = current
        current = current.next
    }
    
    return dummyHead.next
};