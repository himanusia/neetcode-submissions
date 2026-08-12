class MinStack:

    def __init__(self):
        self.s = []
        self.sm = []

    def push(self, val: int) -> None:
        self.s += [val]
        if self.sm:
            if self.sm[-1] > val:
                self.sm += [val]
            else:
                self.sm += [self.sm[-1]]
        else:
            self.sm += [val]

    def pop(self) -> None:
        self.s = self.s[:-1]
        self.sm = self.sm[:-1]

    def top(self) -> int:
        return self.s[-1]

    def getMin(self) -> int:
        return self.sm[-1]
