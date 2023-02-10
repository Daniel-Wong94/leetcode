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
var sortList = function(head) {
    const values = []
    let current = head
    let dummy = new ListNode()
    
    while (current) {
        values.push(current.val)
        
        current = current.next
    }
    
    current = dummy;
    values.sort((a, b) => a - b)
    for (const value of values) {
        const node = new ListNode(value)
        current.next = node
        current = current.next
    }
    
    return dummy.next
};