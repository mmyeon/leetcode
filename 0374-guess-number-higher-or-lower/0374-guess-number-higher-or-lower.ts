/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const binarySearch = (low: number, high: number): number => {
    const mid = Math.floor((low + high) / 2)
    const guessResult = guess(mid)

    if (guessResult === -1) {
        return binarySearch(low, mid - 1)
    } else if (guessResult === 1) {
        return binarySearch(mid + 1, high)
    } else return mid
}


function guessNumber(n: number): number {
    return binarySearch(1, n)
};