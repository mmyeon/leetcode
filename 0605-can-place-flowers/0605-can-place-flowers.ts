function canPlaceFlowers(flowerbed: number[], n: number): boolean {
    let canPossibleFlowers = 0;
    let i = 0;

    if (flowerbed.length === 1 && flowerbed[i] === 0) return true;

    while (i < flowerbed.length) {
        if (flowerbed[i] === 0 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0 || i === 0 && flowerbed[i] === 0 && flowerbed[i + 1] === 0 ||

            i === flowerbed.length - 1 && flowerbed[i] === 0 && flowerbed[i - 1] === 0


        ) {

            canPossibleFlowers++
            flowerbed[i] = 1
        }
        i++
    }

    return canPossibleFlowers >= n
};