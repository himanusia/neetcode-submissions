class DynamicArray:
    
    def __init__(self, capacity: int):
        self.capacity = capacity
        self.li = [0] * capacity
        self.size = 0


    def get(self, i: int) -> int:
        return self.li[i]


    def set(self, i: int, n: int) -> None:
        self.li[i] = n


    def pushback(self, n: int) -> None:
        if self.size == self.capacity:
            self.resize()
        self.li[self.size] = n
        self.size += 1


    def popback(self) -> int:
        self.size -= 1
        return self.li[self.size]


    def resize(self) -> None:
        self.capacity *= 2
        new_li = [0] * self.capacity
        for i in range(self.size):
            new_li[i] = self.li[i]
        self.li = new_li


    def getSize(self) -> int:
        return self.size

    
    def getCapacity(self) -> int:
        return self.capacity