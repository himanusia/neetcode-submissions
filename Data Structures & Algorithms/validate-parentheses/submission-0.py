class Solution:
    def isValid(self, s: str) -> bool:
        ss = ""
        for c in s:
            if ss and ((c == ")" and ss[-1] == "(") or
                        (c == "]" and ss[-1] == "[") or
                        (c == "}" and ss[-1] == "{")):
                ss = ss[:-1]
            else:
                ss += c
        return not ss