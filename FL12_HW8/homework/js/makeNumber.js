function makeNumber(ourString) {
	var number = ourString.replace(/[^0-9]/g, '');
	if (isNaN(parseInt(number, 10))) {
		number = '';
        return number;
	} else {
		return number;
	}
}

countNumbers('erer384jj4444666888jfd123');
countNumbers('jdjjka000466588kkkfs662555');
countNumbers('');
