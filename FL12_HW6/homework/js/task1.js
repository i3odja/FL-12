const FOUR_DISCRIMINANT = 4;
const TWO_X_X1_X2 = 2;

let discriminant;
let x1, x2, x;
let a = parseInt(prompt('Enter number #1 (a):', ''), 10);
let b = parseInt(prompt('Enter number #2 (b):', ''), 10);
let c = parseInt(prompt('Enter number #3 (c):', ''), 10);
if (isNaN(a) || isNaN(b) || isNaN(c) || a === 0) {
    console.log('Invalid input data');
} else {
    discriminant = b * b - FOUR_DISCRIMINANT * a * c;
    if (discriminant > 0) {
        x1 = (-b + Math.sqrt(discriminant)) / (TWO_X_X1_X2 * a);
        x2 = (-b - Math.sqrt(discriminant)) / (TWO_X_X1_X2 * a);
        x1 = parseInt(x1, 10);
        x2 = parseInt(x2, 10);
        console.log('x1=', x1, 'x2=', x2);
    } else if (discriminant === 0) {
        x = -b / (TWO_X_X1_X2 * a);
        x = parseInt(x, 10);
        console.log('x = ', x);
    } else {
        console.log('No solution!');
    }
}
