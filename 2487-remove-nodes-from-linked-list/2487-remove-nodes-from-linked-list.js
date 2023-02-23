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
var removeNodes = function(head) {
    const stack = [] // 5-2-13-3-8 top
    
    let curr = head
    
    while (curr) {
        stack.push(curr)
        curr = curr.next
    }

    let prev = null; 
    
    while (stack.length) {
        let curr = stack.pop()
        
        if (prev == null) {
            prev = curr 
        } else if (curr.val < prev.val) {
            continue;
        } else {
            curr.next = prev
            prev = curr
        }
    }
    
    return prev;
};