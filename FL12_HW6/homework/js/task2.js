let a = parseInt(prompt('Enter trigle side#1 length:', ''), 10);
let b = parseInt(prompt('Enter trigle side#2 length:', ''), 10);
let c = parseInt(prompt('Enter trigle side#3 length:', ''), 10);
if (isNaN(a) || isNaN(b) || isNaN(c)) {
    alert('input values should be ONLY numbers');
} else {
    if (a === 0 || b === 0 || c === 0) {
        alert('A triangle must have 3 sides with a positive definite length');
    } else {
        if (a + b > c && a + c > b && b + c > a) {
            if (a === b && a === c && b === c) {
                console.log('Equilateral triangle');
            } else if (a === b || a === c || b === c) {
                console.log('Isosceles triangle');
            } else {
                console.log('Scalene triangle');
            }
        } else {
            console.log('Triangle doesn’t exist');
        }
    }
}