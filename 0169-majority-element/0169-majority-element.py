class Solution(object):
    def majorityElement(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        majority = 0
        count = 0

        for num in nums:
            if count == 0:
                majority = num
                
            if majority == num:
                count += 1
            else:
                count -= 1

            if count == 0:
                majority = num

        return majority
        