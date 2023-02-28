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
    let dummy = new ListNode()
    let curr = removeAt = dummy
    removeAt.next = head
    let index = 0
    
    while (curr) {
        if (index > n) {
            removeAt = removeAt.next
        }
        curr = curr.next
        index++
    }

    removeAt.next = removeAt.next.next
    
    return dummy.next;
};