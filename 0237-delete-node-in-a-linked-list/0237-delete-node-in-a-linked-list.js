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
    // if node is not null and the next node exists
    // set current node val to next val and point to the node after the next node
    // else node must be null and therefore nothing to remove
    if (node && node.next) {
        node.val = node.next.val
        node.next = node.next.next
    }
};