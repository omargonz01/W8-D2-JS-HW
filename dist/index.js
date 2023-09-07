"use strict";
console.log('testing');
const favNum = 3;
const students = ['omar', 3, 'sam', 1];
const employee = {
    id: 1,
    name: 'dylan',
    location: 'USA'
};
const myNumOrStr = 1;
function kgToLbs(weight) {
    if (typeof weight == 'string') {
        return parseInt(weight) * 2.2;
    }
    else {
        return weight * 2.2;
    }
}
console.log(kgToLbs('90'));
