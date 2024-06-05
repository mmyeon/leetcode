function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
    let greatestNumber = 0

    for (let i = 0; i < candies.length; i++) {
        if (candies[i] > greatestNumber) greatestNumber = candies[i]
    }

    return candies.map(num => num + extraCandies >= greatestNumber)

};