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
const result = deleteInvalids([1, null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }])
console.log(result);





// >>04

// function password(obj) {
//     if (typeof obj !== 'object' || !obj.name || !obj.birthYear || !obj.siteName) {
//         return "Invalid Input"
//     }

//     return obj.siteName + '#' + obj.name + '@' + obj.birthYear

// }
// console.log(password({ name: "kolimuddin", birthYear: 1999, siteName: "google" }));
