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
var swapPairs = function(head) {
    if (!head || !head.next) return head;
    let dummy = new ListNode()
    let current = head // 1
    let previous = dummy // D
    
    while (current && current.next) {
        previous.next = current.next // D -> 2
        current.next = previous.next.next // 1 -> 3
        previous.next.next = current // 2 -> 1
        
        
        previous = current // previous = 1
        current = current.next // current = 3
    }
    
    return dummy.next;
};