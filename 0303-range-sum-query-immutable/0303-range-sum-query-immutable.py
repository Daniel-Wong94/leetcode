class NumArray:

    def __init__(self, nums: List[int]):
        self.sumMat = [0]
        
        prefix_sum = 0
        for num in nums:
            prefix_sum += num
            self.sumMat.append(prefix_sum)
        
    def sumRange(self, left: int, right: int) -> int:
        return self.sumMat[right + 1] - self.sumMat[left]


# Your NumArray object will be instantiated and called as such:
# obj = NumArray(nums)
# param_1 = obj.sumRange(left,right)