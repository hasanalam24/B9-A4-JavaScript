

function calculateMoney(ticketSale) {
    if (ticketSale < 0) {
        return "Please provide a positive number";
    }
    const totalTicketPrice = 120 * ticketSale;

    const guardBill = 500;
    const lunchBill = 8 * 50;
    const totalcost = guardBill + lunchBill;

    const totalEarn = totalTicketPrice - totalcost;
    return totalEarn;

}


function checkName(name) {

    const lastLetter = name[name.length - 1];
    if (typeof name !== 'string') {
        return "Invalid";
    }
    else if (lastLetter.toLowerCase() == 'a' || lastLetter.toLowerCase() == 'e' || lastLetter.toLowerCase() == 'i' || lastLetter.toLowerCase() == 'o' || lastLetter.toLowerCase() == 'u' || lastLetter.toLowerCase() == 'w' || lastLetter.toLowerCase() == 'y') {
        return 'Good Name';
    }

    else {
        return 'Bad Name';
    }

}


function deleteInvalids(array) {
    if (Array.isArray(array) === false) {
        return "Invalid";
    }
    let number = [];
    for (const numbers of array) {
        if (typeof numbers === 'number') {
            number.push(numbers);
        }
    }

    const withOutNanValue = number.filter(x => !Number.isNaN(x));
    return withOutNanValue;

}


function password(obj) {
    if (typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName || obj.birthYear <= 999) {
        return "Invalid Input"
    }

    else {
        return obj.siteName + '#' + obj.name + '@' + obj.birthYear
    }

}


function monthlySavings(arr, livingCost) {

    if (Array.isArray(arr) === false || typeof livingCost !== "number") {
        return "Invalid Input"
    }

    let tax = [];
    let lower3000Amounts = 0;
    for (const number of arr) {
        if (number >= 3000) {
            tax.push(number)
        }
        else {
            lower3000Amounts = lower3000Amounts + number;
        }
    }

    let beforeTaxAmount = 0;
    for (const taxCount of tax) {
        beforeTaxAmount = beforeTaxAmount + taxCount;
    }

    const afterTaxAmount = beforeTaxAmount * 20 / 100;
    const afterTaxTotalEarn = lower3000Amounts + beforeTaxAmount - afterTaxAmount;
    const savingsAmount = afterTaxTotalEarn - livingCost

    if (afterTaxTotalEarn > livingCost) {
        return savingsAmount;
    }
    else if (afterTaxTotalEarn < livingCost) {
        return "earn more"
    }
    return savingsAmount;
}

