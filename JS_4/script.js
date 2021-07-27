// Task 1 

// Дан массив с элементами [1, 2, 3, 4, 5]. С помощью цикла for выведите все эти
// элементы на экран.

let arr = [1, 2, 3, 4, 5];

for (let i = 0; i < arr.length; i++) {
    arr[i] = arr.splice(0);
    console.log(arr[i]);
}

console.log('');
console.log('');



// Task 2 

// Дан массив с числами [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7]. Числа могут
// быть положительными и отрицательными. Выведите на экран только отрицательные
// числа, которые больше -10, но меньше -3.

arr = [-2, -1, -3, 15, 0, -4, 2, -5, 9, -15, 0, 4, 5, -6, 10, 7];

for (i = 0; i < arr.length; i++) {
    if(arr[i] > -10 && arr[i] < -3) {
        console.log(arr[i]);
    }
}

console.log('');
console.log('');



// Task 3 

// Создайте новый массив и заполните его значениями от 23 до 57, используя цикл for и
// while. Выведите оба массива. С помощью цикла for найдите сумму элементов этого
// массива. Запишите ее в переменную result и выведите.

let result = 0,
    arr2 = [];

for (i = 23; i <=57; i++) {
	arr2.push(i);
}

console.log(arr2);
console.log('');

// суммируем переменные массива
for (i = 0; i < arr2.length; i++) {
    result += arr2[i];
  }
  
console.log(`Сумма чисел массива = ${result}`);

console.log('');
//

arr3 = [],
i = 22;

while(i <=56) {
    i++;
    arr3.push(i);
}

console.log(arr3);

console.log('');
console.log('');



// Task 4 

// Дан массив числами (строчного типа), например: [‘10’, ‘20’, ‘30’, ‘50’, ‘235’, ‘3000’].
// Выведите на экран только те числа из массива, которые начинаются на цифру 1, 2 или
// 5.

let str = ['10', '20', '30', '50', '235', '3000'],
    num,
    firstNum;

for (i = 0; i < str.length; i++) {
    num = str[i];
    firstNum = num[0];
    if (firstNum == 1 || firstNum == 2 || firstNum == 5) {
      console.log(num);
    }
}

console.log('');
console.log('');



// Task 5

// Составьте массив дней недели (ПН, ВТ, СР и т.д.). С помощью цикла for выведите все
// дни недели, а выходные дни выведите жирным.

let week = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];

for (let i = 0; i < week.length; i++) {
    if(week[i] == 'Суббота' || week[i] == 'Воскресенье') { 
        document.write(`${week[i].bold()} `)
    } else {
        document.write(`${week[i]} `)
    }
}

console.log('');
console.log('');



// Taks 6

// Создайте массив с произвольными данными. Добавьте в конец массива любой элемент,
// и получите последний элемент массива, используя свойство length.

let array = [1, 'Произвольные', -97, true, "данные"],
    lastItem;

array.push('false');
console.log(array);

console.log('');

lastItem = array[array.length - 1];
console.log(lastItem);

console.log('');
console.log('');



// Task 7 

// Запросите у пользователя по очереди числовые значения при помощи prompt и
// сохраните их в массив. Собирайте числа до тез пор пока пользователь не введет пустое
// значение. Выведите получившийся массив на экран. Выполните сортировку чисел
// массива, и выведите его на экран.

arr = [];
let digit;

while(digit != '') {
    digit = prompt('Введите число массива: ');
    arr.push(Number(digit));
}

arr.pop();
console.log(arr);

arr.sort( function(a, b) {
    return a - b;
});
console.log(arr);

console.log('');
console.log('');



// Task 8 

// Переверните массив [12, false, ‘Текст’, 4, 2, -5, 0] (выведите в обратном порядке),
// используя цикл while и метод reverse.

array = [12, false, 'Текст', 4, 2, -5, 0];
i = 0;

array.reverse();

console.log(array);

console.log('');

while(i < array.length) {
    array[i] = array.splice(0);
    console.log(array[i]);
    i++;
}


console.log('');
console.log('');



// Task 11 

// Нарисовать равнобедренный треугольник из символов ^. Высоту выбирает
// пользователь. Например: высота = 5, на экране:


i = 0;

let max = prompt('Определите количество строк(введите число): ');

while (i < max) {
    space = "";
    star = "";
    for (j = 0; j < max - i; j++) space += " ";
    for (j = 0; j < 2 * i + 1; j++) star += "*";
    console.log(space + star);
    i++;
}