function calcTip(bill) {// CREATING FUNCTION//
    return (bill >= 50 && bill <= 300) ? bill * 0.15 : bill * 0.2;
}
let bills1 = [275, 40, 430]; // DECLARING ARRAY
let tips1 = bills1.map(calcTip(bill));
let totals1 = bills1.map((bill, index) => bill + tips1[index]); // CREATING TOTAL
let bills2 = [125, 555, 44];
let tips2 = bills2.map(calcTip(bill));// ASSIGNING VALUE OF TOTAL VALUE TO ARRAY
let totals2 = bills2.map((bill, index) => bill + tips2[index]);
console.log("Bills Data Set 1:", bills1);
console.log("Tips Data Set 1:", tips1);// DISPLAYING ARRAYS
console.log("Totals Data Set 1:", totals1);
console.log("Bills Data Set 2:", bills2);
console.log("Tips Data Set 2:", tips2);
console.log("Totals Data Set 2:", totals2);
console.log(`The bill was $${bill.toFixed(2)}, the tip was $${tip.toFixed(2)}, and the total value $${(bill + tip).toFixed(2)}.`);
