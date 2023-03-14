class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        previous_index = {}
        
        for idx, num in enumerate(nums):
            if (num in previous_index) and (abs(previous_index[num] - idx) <= k):
                return True
            
            previous_index[num] = idx
            
        return False