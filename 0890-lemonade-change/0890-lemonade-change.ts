function lemonadeChange(bills: number[]): boolean {
    // 5달러 지폐, 10 달러 지폐 추적하기 
    let fiveDollarCount = 0, tenDollarCount = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            fiveDollarCount++;
        } else if (bills[i] === 10) {
            if (fiveDollarCount >= 1) {
                fiveDollarCount--;
                tenDollarCount++;
            } else {
                return false
            };
        } else if (
            bills[i] === 20
        ) {
            if (fiveDollarCount >= 1 && tenDollarCount >= 1) {
                fiveDollarCount--;
                tenDollarCount--;
            } else if (fiveDollarCount >= 3) {
                fiveDollarCount -= 3;
            } else {
                return false;
            };
        }
    }

    return true
};