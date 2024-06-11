class MinStack {
    private stack: number[];
    private minStack: number[];

    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val: number): void {
        this.stack.push(val);
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1])
            this.minStack.push(val)
    }

    pop(): void {
        const poppedValue = this.stack.pop();
        // 제거하는 값이 minStack의 마지막 값과 동일한 경우에 똑같이 값 제거해주기 
        if(poppedValue === this.minStack[this.minStack.length-1])
        this.minStack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1]
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1]
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