class LinkedList:
    
    def __init__(self):
        self.li = []
        self.size = 0

    
    def get(self, index: int) -> int:
        if index >= self.size:
            return -1
        return self.li[index]


    def insertHead(self, val: int) -> None:
        self.li = [val] + self.li
        self.size += 1


    def insertTail(self, val: int) -> None:
        self.li.append(val)
        self.size += 1


    def remove(self, index: int) -> bool:
        if index >= self.size:
            return False
        self.li = self.li[:index] + self.li[index+1:]
        self.size -= 1
        return True


    def getValues(self) -> List[int]:
        return self.li        
