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
    const nodes = []
    
    let curr = head
    while (curr) {
        nodes.push(curr)
        curr = curr.next
    }
    
    let removeAt = nodes.length - n
    let prev = head
    curr = head
    
    if (removeAt === 0) return head.next
    
    while (removeAt) {
        prev = curr
        curr = curr.next

        removeAt--
    }
    
    prev.next = curr.next
    
    return head;
};