class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        if len(nums) == 0: return [[]]
        
        firstEl = nums[0]
        subsetsWithout = self.subsets(nums[1:])
        subsetsWith = []
        
        for subset in subsetsWithout:
            subsetsWith.append([firstEl, * subset])
            
        return [*subsetsWith, *subsetsWithout]
        