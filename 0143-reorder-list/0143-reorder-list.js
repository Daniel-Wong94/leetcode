/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    const nodes = []
    let curr = head
    
    while (curr) {
        nodes.push(curr)
        curr = curr.next
    }
    
    let left = 0
    let right = nodes.length - 1
    
    while (Math.abs(left - right) > 1) {
        nodes[right].next = nodes[left].next
        nodes[left].next = nodes[right]
        
        left++
        right--
    }
    
    nodes[right].next = null
    
    return head
};