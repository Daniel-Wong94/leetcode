class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        # use a sorted version of the str as a key in tracker
        tracker = {}
        
        for str in strs:
            key = "".join(sorted(str))
            if key in tracker:
                tracker[key].append(str)
            else:
                tracker[key] = [str]
        
        return tracker.values()