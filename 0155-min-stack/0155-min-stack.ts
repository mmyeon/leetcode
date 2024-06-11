class MinStack {
    minStack: number[];

    constructor() {
        this.minStack = [];
    }

    push(val: number): void {
        this.minStack = [...this.minStack, val]
    }

    pop(): void {
        // 배열에서 마지막 요소 제외하기 
        this.minStack = [...this.minStack.slice(0, this.minStack.length - 1)]
    }

    top(): number {
        return this.minStack[this.minStack.length - 1]
    }

    getMin(): number {
        return Math.min(...this.minStack)
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */