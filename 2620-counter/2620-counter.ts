function createCounter(n: number): () => number {
    let counter = n; 
    
    return function() {
        const originalValue = counter;
        
        counter++;
        return originalValue
    }
}


/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */