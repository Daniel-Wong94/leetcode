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
var mergeNodes = function(head) {
    const dummy = new ListNode()
    let dummyPointer = dummy;
    let current = head.next
    let sum = 0;
    
    while (current) {
        if (current.val === 0) {
            const newNode = new ListNode(sum)
            dummyPointer.next = newNode
            dummyPointer = dummyPointer.next
            sum = 0
        } else {
            sum += current.val
        }
        
        current = current.next
    }
    
    return dummy.next
};