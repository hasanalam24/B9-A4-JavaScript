// 01>.

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




// 03>>
function deleteInvalids(array) {


    let number = [];
    for (const numbers of array) {
        if (typeof numbers === 'number') {
            number.push(numbers)
        }
    }

    let withOutNanValue = []
    for (const ValueNan of number) {
        if (ValueNan > 0) {
            withOutNanValue.push(ValueNan)
        }
    }

    return withOutNanValue;

}
// const result = deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])
// console.log(result);





// >>04

// function password(obj) {
//     if (typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName) {
//         return "Invalid Input"
//     }

//     return obj.siteName + '#' + obj.name + '@' + obj.birthYear

// }
// console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));


// >>>05
function monthlySavings(arr, livingCost) {

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
    return savingsAmount;

}
const savings = monthlySavings([1000, 2000, 2500], 5000);
console.log(savings)