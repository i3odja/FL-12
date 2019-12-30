function isLeapYear(date) {
    date = new Date(date);
    if (isNaN(date)) {
        return 'Invalid Date';
    }
    let feb29 = new Date(date.getFullYear(), 1, 29);
    if (feb29.getDate() === 29) {
        return '' + date.getFullYear() + ' is a leap year';
    }
    return '' + date.getFullYear() + ' is not a leap year';
}

isLeapYear('2020-01-01 00:00:00');
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2021-01-15 13:00:00');
isLeapYear('2200-01-15 13:00:00');
isLeapYear(1213131313135465656654564646542132132131);
isLeapYear(1213131313);