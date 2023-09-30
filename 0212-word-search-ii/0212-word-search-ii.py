class TrieNode:
    def __init__(self):
        self.children = {}
        self.isWord = False
    
    def add_word(self, word):
        curr = self
        
        for c in word:
            if c not in curr.children:
                curr.children[c] = TrieNode()
            curr = curr.children[c]
        
        curr.isWord = True

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        # set up our trie tree
        root = TrieNode()
        
        for word in words:
            root.add_word(word)
            
        ROWS, COLS = len(board), len(board[0])
        # res = avoids visting the same word in a board, visit = avoids cycles
        res, visit = set(), set()
        
        def dfs(row, col, node, word):
            in_bound = 0 <= row < ROWS and 0 <= col < COLS
            
            if not in_bound or (row, col) in visit or board[row][col] not in node.children:
                return
            
            visit.add((row, col))
            node = node.children[board[row][col]]
            word += board[row][col]
            
            # check if end of word
            if node.isWord:
                res.add(word)
                
            # recursive case for each direction
            dfs(row + 1, col, node, word)
            dfs(row - 1, col, node, word)
            dfs(row, col + 1, node, word)
            dfs(row, col - 1, node, word)
            
            # backtracking: can go back to this position after dfs
            visit.remove((row, col))
        
        for row in range(ROWS):
            for col in range(COLS):
                dfs(row, col, root, "")
        
        return list(res)