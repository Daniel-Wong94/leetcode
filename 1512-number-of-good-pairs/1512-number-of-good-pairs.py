from collections import defaultdict

class Solution:
    def numIdenticalPairs(self, nums: List[int]) -> int:
        counts = defaultdict(int)
        res = 0
        
        for num in nums:
            res += counts[num]
            counts[num] += 1
        
        return res