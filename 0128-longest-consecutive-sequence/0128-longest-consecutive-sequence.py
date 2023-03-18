class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        # nums_set for O(1) lookup
        nums_set = set(nums)
        subsets = {}
        max_subset = 0
        
        # find start of each subset, initialize subset size to 1
        for num in nums:
            if (num - 1) not in nums_set:
                subsets[num] = 1
        
        # for each start, increment its value for each exisitng consecutive
        for subset in subsets:
            consecutive = subset + 1
            
            while consecutive in nums_set:
                subsets[subset] += 1
                consecutive += 1
                
            max_subset = max(max_subset, subsets[subset])
            
        return max_subset