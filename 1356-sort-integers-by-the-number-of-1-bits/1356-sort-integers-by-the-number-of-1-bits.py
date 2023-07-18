class Solution:
    def sortByBits(self, arr: List[int]) -> List[int]:
        def count_ones(num):
            return bin(num).count("1")
        
        result = sorted(arr, key = lambda num: (count_ones(num), num))
        return result