/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function(node) {
    if (!node) return
    if (node.val !== null) {
        if (node.next) {
            node.val = node.next.val
            node.next = node.next.next
        } else {
            node.val = null
            node.next = null
        }
    }
};