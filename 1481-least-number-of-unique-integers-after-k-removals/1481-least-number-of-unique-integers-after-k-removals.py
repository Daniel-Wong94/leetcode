from collections import Counter

class Solution:
    def findLeastNumOfUniqueInts(self, arr: List[int], k: int) -> int:
        count = Counter(arr)
        sorted_count = sorted(count.values())
        print(sorted_count)
        
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