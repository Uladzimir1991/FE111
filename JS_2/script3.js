// Задание 3

let string = '222223',
    sum1 =+string[0] + +string[1] + +string[2],
    sum2 =+string[3] + +string[4] + +string[5];

    console.log(sum1);

//Вариант 1

//if(sum1 == sum2) console.log('\n' + 'Да!');
//else console.log('\n' + 'Нет!');

// Вариант 2
sum1 == sum2 ? console.log(`Да!`) : console.log(`Нет!`);