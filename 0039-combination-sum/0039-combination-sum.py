class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        results = []
        
        def backtrack(current_combination, current_index, remaining):
            # base case: reached target, append a copy of current_combination to result
            if remaining == 0:
                results.append(current_combination.copy())
                return
            # base case: ran out of candidates or overshot the target, return
            if remaining < 0 or current_index >= len(candidates):
                return
            
            current_candidate = candidates[current_index]
            
            # decision: take the current candidate
            current_combination.append(current_candidate)
            backtrack(current_combination, current_index, remaining - current_candidate)
            
            # decision: skip current candidate (pop it out of current_combination)
            current_combination.pop()
            backtrack(current_combination, current_index + 1, remaining)
            
        backtrack([], 0, target)
        return results