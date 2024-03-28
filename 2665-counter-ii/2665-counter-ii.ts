type Counter = {
    increment: () => number,
    decrement: () => number,
    reset: () => number,
}

function createCounter(init: number): Counter {
    let currentCount = init;

    return {
        // 연속된 메서드 호출되는 케이스 고려 
        // 리턴한 init 값으로 increment 호출해야 한다. 
        "increment" : () => {
            currentCount++;
            return currentCount} ,
        "decrement" : () => {
            currentCount--;
            return currentCount} ,
        "reset" : () => {
            currentCount = init;
            return currentCount}

    }
    
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */