function lemonadeChange(bills: number[]): boolean {
    // 5달러 지폐, 10 달러 지폐 추적하기 
    let fiveDollarNumber = 0, tenDollarNumber = 0;

    for (let i = 0; i < bills.length; i++) {
        if (bills[i] === 5) {
            fiveDollarNumber++;
        } else if (bills[i] === 10) {
            if (fiveDollarNumber >= 1) {
                fiveDollarNumber--;
                tenDollarNumber++;
            } else {
                console.log("10", fiveDollarNumber, tenDollarNumber)
                return false
            };
        } else if (
            bills[i] === 20
        ) {
            if (fiveDollarNumber >= 1 && tenDollarNumber >= 1) {
                fiveDollarNumber--;
                tenDollarNumber--;
            } else if (fiveDollarNumber >= 3) {
                fiveDollarNumber -= 3;
            } else {
                return false;
            };
        }
    }

    return true
};