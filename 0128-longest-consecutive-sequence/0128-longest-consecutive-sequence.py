class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        nums_set = set(nums)
        subsets = {}
        max_subset = 0
        
        for num in nums:
            if (num - 1) not in nums_set:
                subsets[num] = 1
        
        for subset in subsets:
            consecutive = subset + 1
            
            while consecutive in nums_set:
                subsets[subset] += 1
                consecutive += 1
                
            max_subset = max(max_subset, subsets[subset])
            
        return max_subset