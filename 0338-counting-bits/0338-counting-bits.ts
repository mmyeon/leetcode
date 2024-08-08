function countBits(n: number): number[] {
    let result: number[] = new Array(n+1).fill(0)

    for(let i = 0; i <= n; i++) {
        result[i] = result[i >> 1] + (i & 1)
    }
  
    return result 
};