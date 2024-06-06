function largestAltitude(gain: number[]): number {
    let largest = 0;
    let altitudesSum = 0;

    for (let i = 0; i < gain.length; i++) {
        altitudesSum += gain[i]
        largest = Math.max(altitudesSum, largest)
    }

    return largest;
};