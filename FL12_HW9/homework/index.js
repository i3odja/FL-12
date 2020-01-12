let two = 2;
let three = 3;
let five = 5;
let seven = 7;
let eight = 8;
let ten = 10;
let number31 = 31;
let number48 = 48;
let number14 = 14;
let number58 = 58;
let number29 = 29;
let number30 = 30;
let year2019 = 2019;
let msInSec = 1000;
let minInHour = 60;
let secInMin = 60;
let hourInday = 24;
let days365 = 365;

// TASK # 1
function convert() {
    let convertedMass = [];
    for (let i = 0; i < arguments.length; i++) {
        if ( typeof arguments[i] === 'string') {
            convertedMass[i] = Number(arguments[i]);
        } else {
            convertedMass[i] = arguments[i] + '';
        }
    }
    return convertedMass;
}
convert('1', two, three, '4');

// TASK # 2
function executeforEach(x) {
    for (let i = 0; i < x.length; i++) {
        x[i] = arguments[1](x[i]);
    }
}
executeforEach([1,two,three], function(el) { 
    console.log(el * two) 
});

// TASK # 3
function mapArray(x) {
    let transformedArray = [];
    for ( let i = 0; i < x.length; i++ ) {
        if ( typeof x[i] === 'string') {
            transformedArray[i] = Number(x[i]);
        } else {
            transformedArray[i] = x[i];
        }
    }
    executeforEach(transformedArray, arguments[1]);
    return transformedArray;
}
mapArray([two, '5', eight], function(el) {
    return el + three;
});

// TASK # 4
function filterArray(x) {
    let inputArray = [];
    for ( let i = 0; i < x.length; i++ ) {
        inputArray[i] = x[i];
    }
	let filteredArray = [];
    executeforEach(x, arguments[1]);
	for ( let i = 0, j = 0; i < x.length; i++ ) {
        if ( x[i] === true ) {
            filteredArray[j] = inputArray[i];
            j++;
        }
	}
    return filteredArray;
}
filterArray([two, five, eight], function(el) {
    return el % two === 0; 
});

// TASK # 5
function flipOver(inputString) {
    let reversedString = '';
    for ( let i = 0, j = inputString.length-1; i < inputString.length; i++ ) {
        reversedString += inputString[j];
        j--;
    }
    return reversedString;
}
flipOver('hey world');

// TASK # 6
function makeListFromRange(range) {
    let listFromRange = [];
    for ( let j = 0, i = range[0]; i <= range[1]; i++ ) {
        listFromRange[j] = i;
        j++;
    }
    return listFromRange;
}
makeListFromRange([two, seven]);

// TASK # 7
const actors = [
  { name: 'tommy', age: 36 },
  { name: 'lee', age: 28 }
];
function getArrayOfKeys(actors, item) {
    let items = [];
    let y = 0;
    let i = 0;
    for ( let x = 0; x < actors.length; x++ ) {
        for ( y in actors[x] ) {
            if ( y === item ) {
                items[i] = actors[x][y];
                i++;
            }
        }
    }
    return items;
}
getArrayOfKeys(actors, 'name');

// TASK # 8
function substitute(inputArray) {
    let outputArray = [];
    mapArray(inputArray, function() {
        for ( let i = 0; i < inputArray.length; i++ ) {
            if ( inputArray[i] <= number30 ) {
                outputArray[i] = '*';
            } else {
                outputArray[i] = inputArray[i];
            }
        }
    });
    return outputArray;
}
substitute([number58, number14, number48, two, number31, number29]);

// TASK # 9
const date = new Date(year2019, 0, two);
function getPastDay(date, days) {
    let daysInMs = days * hourInday * minInHour * secInMin * msInSec;
    let needDaysInMs = date - daysInMs;
    let needDate = new Date(needDaysInMs);
    let needDay = needDate.getDate();
    return needDay;
}
getPastDay(date, 1);
getPastDay(date, two);
getPastDay(date, days365);

// TASK # 10
function formatDate(date) {
    let year = date.getFullYear();
    let month = date.getMonth() + 1;
    let day = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    hour = hour < ten ? '0' + hour : hour;
    minute = minute < ten ? '0' + minute : minute;
    let needDate = `${year}/${month}/${day} ${hour}:${minute}`;
    return needDate;  
}
formatDate(new Date('6/15/2018 09:15:00'));
formatDate(new Date());