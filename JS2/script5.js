// Задание 5

a = 10;
let b = 2,
    sum = a + b,
    dif = a - b,
    comp = a * b,
    quot = a / b,
    totalAmount = sum + dif + comp + quot;

    console.log(totalAmount);
    
//if(totalAmount > 1) {
//    totalAmount *= totalAmount;
//    console.log(totalAmount);
//} else {
//    console.log('\n' + 'Сумма чисел меньше 1.');
//}

totalAmount > 1 ? console.log(totalAmount * totalAmount) : console.log (`Сумма чисел меньше 1.`);