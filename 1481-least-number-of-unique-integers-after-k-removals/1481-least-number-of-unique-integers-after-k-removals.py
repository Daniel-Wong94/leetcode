from collections import Counter

# get the frequency of each number
# sort the frequency in ascending order
# greedy: delete the numbers with the lowest frequency first
class Solution:
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        count = Counter(arr)
        sorted_count = sorted(count.values())
        
        deletions = 0
        i = 0
        
        while k > 0:
            if sorted_count[i] <= k:
                deletions += 1
                k -= sorted_count[i]
            else:
                break    
            i += 1
            
        return len(sorted_count) - deletions