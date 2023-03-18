class Solution:
    def isPalindrome(self, x: int) -> bool:
        # it will always be false if the number is negative
        if x < 0: return False
        
        num = x
        reversed_num = 0
        
        # keep taking the last digit of num and putting in the front of reversed_num
        while x > 0:
            last_digit = x % 10
            reversed_num = reversed_num * 10 + last_digit
            
            x = x // 10
        
        return num == reversed_num