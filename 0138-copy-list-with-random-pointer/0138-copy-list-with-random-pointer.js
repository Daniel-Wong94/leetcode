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
// map the original node to the cloned node, so if we visit it again, we can just map get
var copyRandomList = function(head, visited = new Map()) {
    // base case: node is null
    if (!head) return null
    
    // check if we already mapped this original node, if so, return the cloned node
    if (visited.has(head)) return visited.get(head);
    
    // create our clone node
    const current = new Node(head.val, null, null)
    
    // map the cloned node to the original
    visited.set(head, current)    
    
    // recursive steps: DFS the .next and .random pointers
    current.next = copyRandomList(head.next, visited)
    current.random = copyRandomList(head.random, visited)   
    
    return current
};