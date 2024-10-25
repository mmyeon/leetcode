type Fn = (...params: any[]) => Promise<any>;

function timeLimit(fn: Fn, t: number) {
    return (...args) => {
        const promises = [
            new Promise((resolve) => resolve(fn(...args))),
            new Promise((_, reject) => setTimeout(() => reject("Time Limit Exceeded"), t))
        ]

        return Promise.race(promises)
    }
}



/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */