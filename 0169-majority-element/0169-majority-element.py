class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        count = {}
        
        for num in nums:
            if not num in count:
                count[num] = 1
            else:
                count[num]+= 1
            
            if count[num] > len(nums) / 2:
                return num
        