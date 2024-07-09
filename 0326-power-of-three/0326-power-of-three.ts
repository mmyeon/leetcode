function isPowerOfThree(n: number): boolean {
    let isPowerOfThree = false;

    if (n <= 0) return isPowerOfThree;

    const checkPowerOfThree = (n: number) => {
        if (n === 1) { isPowerOfThree = true } else {

            if (n % 3 > 0) {
                isPowerOfThree = false;
                return;
            } else {
                return checkPowerOfThree(n / 3)
            }

        }
    }

    checkPowerOfThree(n)


    return isPowerOfThree;
};