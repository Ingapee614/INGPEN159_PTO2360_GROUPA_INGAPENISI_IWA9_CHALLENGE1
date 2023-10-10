const salary = 4000;
const lodging = 'apartment'
const size = 'large'


// Only change the syntax below (not the values or key names)

const expenses = {
    food: 51.7501,
    transport:  10.2,
}
  
const tax = {
    734: 3,
    234: 20, // removed % and declare them as numbers
    913: 12,
    415: 38,
    502: 42,
}

const rent = {
    none: 0,
    smallRoom : 200,  // Removed qoutations, are used correct naming method
    largeRoom : 300,
    smallApartment : 400,
    largeApartment : 800,
    smallHouse : 1200,
    largeHouse : 2400,
}

// You can change below however you want

const taxAsDecimal =parseFloat (tax[913] / 100); // convert number to percentage format
const startingAfterTax = salary *(1 - taxAsDecimal); //  salary minus tax
const type = lodging + size
const rentAmount =rent.largeApartment;
const totalExpences= expenses.transport + expenses.food + rentAmount;
const balance = startingAfterTax - totalExpences;

console.log('R',balance.toFixed(2));