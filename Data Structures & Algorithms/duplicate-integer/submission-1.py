class Solution:
    def hasDuplicate(self, nums: List[int]) -> bool:
        li = []
        for i in nums:
            if i in li:
                return True
            li.append(i)
        return False