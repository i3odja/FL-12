function makeNumber(ourString) {
    var number = ourString.replace(/[^0-9]/g, '');
	if (isNaN(parseInt(number, 10))) {
		number = '';
        return number;
	} else {
		return number;
	}
}

function countNumbers(ourString) {
    var newNumber = makeNumber(ourString).toString();
    let countOfDigits = {};
    for (let digit of newNumber) {
        if (countOfDigits[digit] !== undefined) {
            countOfDigits[digit]++;
        } else {
            countOfDigits[digit] = 1;
        }
    }
    return countOfDigits;
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');
