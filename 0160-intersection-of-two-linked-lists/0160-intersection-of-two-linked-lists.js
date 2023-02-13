/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    // iterate A + B and B + A
    let currA = headA, currB = headB
    
    // while loop will still end when both pointers are null
    while (currA !== currB) {
        currA = currA ? currA.next : headB
        currB = currB ? currB.next : headA
    }
    
    return currB;
};