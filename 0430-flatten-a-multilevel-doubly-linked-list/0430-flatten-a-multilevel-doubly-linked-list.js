/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
    const stack = [  ]
    let curr = head
    
    while (curr) {
        if (curr.next && !curr.child) {
            curr = curr.next
        } else if (curr.next && curr.child) {
            stack.push(curr.next)
            curr.next = curr.child
            curr.child.prev = curr
            curr.child = null
            curr = curr.next
        } else if (!curr.next && !curr.child) {
            const nextNode = stack.pop()
            if (!nextNode) break;
            curr.next = nextNode
            nextNode.prev = curr
            curr = curr.next
        } else {
            curr.next = curr.child
            curr.child.prev = curr
            curr.child = null
            curr = curr.next
        }
    }

    return head
};