/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

// by treating this like a graph (there's two pointers: next and random)
// we see that this a bidirectional cyclic graph
// therefore, we need to track our visited nodes to prevent cycles
var copyRandomList = function(head, visited = new Map()) {
    if (!head) return null
    
    if (visited.has(head)) return visited.get(head);
    
    const current = new Node(head.val, null, null)
    
    visited.set(head, current)    
    
    current.next = copyRandomList(head.next, visited)
    current.random = copyRandomList(head.random, visited)   
    
    return current
};