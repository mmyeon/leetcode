
function isPalindrome(left: number, right: number, s: string) {
    while (left < right) {
        if (s[left] !== s[right]) {
            return false
        }
        left++;
        right--
    }

    return true
}

function validPalindrome(s: string): boolean {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        if (s[left] === s[right]) {
            left++;
            right--;
        } else {
            return isPalindrome(left + 1, right, s) || isPalindrome(left, right - 1, s)
        }
    }
    return true;
};

