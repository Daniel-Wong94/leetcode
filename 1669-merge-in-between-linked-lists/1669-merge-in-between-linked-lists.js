/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    // find tail of the list 2 and the node before and after deletion
    let tail2 = list2
    
    while (tail2.next) tail2 = tail2.next
    
    let nodeAfter = list1;
    let nodeBefore;
    let i = 0
    
    while (i <= b) {
        if (i === a - 1) nodeBefore = nodeAfter
        
        nodeAfter = nodeAfter.next
        i++
    }
    
    // redirect nodeBefore to point to start of list 2 
    // and tail of list2 to point to the node after
    nodeBefore.next = list2
    tail2.next = nodeAfter
    
    
    return list1;
};