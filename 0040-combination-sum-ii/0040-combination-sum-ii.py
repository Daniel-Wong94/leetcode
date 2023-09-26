class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        # sort the candidates so it's easier to handle duplicates (next to each other)
        candidates.sort()
        results = []
        
        def backtrack(current_combination, current_index, remaining):
            # base case: we reached the target, so add a copy of the combination to result
            if remaining == 0:
                results.append(current_combination.copy())
                return
            
            # base case: reached passed the target, return
            if remaining < 0:
                return
            
            # mark previous_candidate as -1 (all candidates > 0) to avoid error on first iteration
            previous_candidate = -1
            
            # iterate from current position to rest of candidates
            for i in range(current_index, len(candidates)):
                next_candidate = candidates[i]
                
                # skip this iteration if duplicate candidate
                if previous_candidate == next_candidate:
                    continue;
                
                # decision: take the next_candidate
                current_combination.append(next_candidate)
                backtrack(current_combination, i + 1, remaining - next_candidate)
                
                # decision: don't take next_candidate (pop it out before next iteration)
                current_combination.pop()
                
                # mark previous candidate as the next_candidate
                previous_candidate = next_candidate
        
        backtrack([], 0, target)
        return results