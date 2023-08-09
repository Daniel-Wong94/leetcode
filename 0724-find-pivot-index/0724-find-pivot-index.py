# from numpy import sum

class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        right_sum = sum(nums)
        left_sum = 0
        
        for i in range(len(nums)):
            left_sum += nums[i]
            
            if left_sum == right_sum:
                return i
        
            right_sum -= nums[i]
        
        return -1
        