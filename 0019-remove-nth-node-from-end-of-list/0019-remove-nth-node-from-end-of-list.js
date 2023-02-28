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
    let behind = curr = dummy
    behind.next = head
    let index = 0
    
    while (curr) {
        if (index > n) behind = behind.next
        curr = curr.next
        index++
    }

    behind.next = behind.next.next
    
    return dummy.next;
};