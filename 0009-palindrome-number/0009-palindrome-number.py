class Solution:
    def isPalindrome(self, x: int) -> bool:
        if x < 0: return False
        
        num = x
        reversed_num = 0
        
        while x > 0:
            last_digit = x % 10
            reversed_num = reversed_num * 10 + last_digit
            
            x = x // 10
        
        return num == reversed_num