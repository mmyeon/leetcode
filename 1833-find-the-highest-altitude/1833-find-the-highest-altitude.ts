function largestAltitude(gain: number[]): number {
    let altitudes = [0]
    let altitudesSum = 0;

    for (let i = 0; i < gain.length; i++) {
        altitudesSum += gain[i]
        altitudes.push(altitudesSum)
    }

    return Math.max(...altitudes)
};