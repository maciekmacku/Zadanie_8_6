
var a = 5,
    b = 5,
    value = (a * a) - (2 * a * b) - (b * b);

if (value > 0) {
    console.log('Wartosc dodatnia');
}
else if (value < 0) {
    console.log('Wartosc ujemna');
} 
else {
    console.log('wynik równa się zero');
}