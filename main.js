// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5]
const allInvalid =[];

// Add your functions below:
//****Check if a credit card is valid or not. if valid return true else return false
const validCred = arr => {
    let reversedArr = [];
    //iterate through arr from right to left
    for(let i = arr.length -1; i >= 0; i--) {
        if(arr.length % 2 === 0){
            if (i % 2 === 0) {
                reversedArr.push(arr[i] * 2);
            } else {
                reversedArr.push(arr[i]);
            }
        } else {
            if (i % 2 !== 0) {
                reversedArr.push(arr[i] * 2);
            } else {
                reversedArr.push(arr[i]);
            }
        }
        
    }
    //if doubled numer is > 9, minus 9
    let minusNineArr = reversedArr.map((i) => {
        if(i > 9) {
            return i - 9;
        } else {
            return i;
        }
    });
    //sum all digits of creidt card #
    const summedArr = minusNineArr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    //check if valid by dividing by 10, if theres a remainder it's not valid
    if(summedArr % 10 === 0) {
        return true;
    } else {
        return false;
    }
};

// validCred(valid1);
// validCred(valid3);


//****Funtion to check a nested array of cards to find invalid ones
const findInvalidCards = nestedArr => {
    for (const arr of nestedArr) {
        if(!validCred(arr)){
            allInvalid.push(arr);
        }
    }
    return allInvalid;
};

findInvalidCards(batch);

//****Function to check which companies have invalid cards
const idInvalidCardCompanies = nestedInvalid => {
    const companies = [];
    for(const arr of nestedInvalid) {
        if(arr[0] === 3){
            companies.unshift('Amex');
        } else if(arr[0] === 4) {
            companies.unshift('Visa');
        } else if (arr[0]=== 5){
            companies.unshift('Mastercard');
        } else if (arr[0]=== 6) {
            companies.unshift('Discover');
        } else {
            console.log(`Company not found!`);
        }
    }
    return companies.sort().filter((item, pos, arr) => {
        return !pos || item !== arr[pos -1];
    });
};
// console.log(allInvalid);
console.log(idInvalidCardCompanies(allInvalid));
console.log(idInvalidCardCompanies([invalid1]))

