class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        buy = inf
        profit = -inf
        
        for price in prices:
            buy = min(buy, price)
            profit = max(profit, price - buy)
        
        return profit