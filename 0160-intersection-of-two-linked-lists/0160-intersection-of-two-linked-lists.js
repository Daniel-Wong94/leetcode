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
    const pathA = []
    let currA = headA;
    let currB = headB;
    
    while (currA) {
        pathA.push(currA)
        currA = currA.next
    }
        
    while (currB) {
        if (pathA.includes(currB)) {
            console.log("YES", currB)
            return currB
        }
        
        currB = currB.next
    }
    
    return currA;
};