// Tasks 8,9 из << 6-ой >> домашки(так, ради проверки моих стараний) и 13 Task из 5ой.


// Task 8

// Напишите ф-цию строгой проверки ввода номер телефона в
// международном формате (<код страны> <код города или сети> <номер
// телефона>). Функция должна возвращать true или false. Используйте
// регулярные выражения.

let phone8 = prompt('Введите ваш номер телефона: ')

function tel() {

    let regexp8 = /^\+?(375|8 ?\(?0)(29|25|44|33)\)? ?(\d{3})\-? ?(\d{2})\-? ?(\d{2})$/gi; 

    console.log(regexp8.test(phone8));
}

tel();



console.log('');
console.log('');
    
    
    

// Task 9 

// Напишите ф-цию строгой проверки адреса эл. почты с учетом следующих
// условий:

// - весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки;
// - имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени;
// - после последней точки и после @, домен верхнего уровня (ru, by, com и т.п.)
// не может быть длиной менее 2 и более 11 символов.

// Функция должна возвращать true или false. Используйте регулярные
// выражения.

let mail9= 'asd123@dogwoof-woof.off';

function email() {

    let regexp9 = /^[a-z]|[0-9?\_?\-?]{2,15}@[a-z\_?\-?].[a-z]{2,11}$/gi;

    console.log(regexp9.test(mail9));
}

email();


console.log('');
console.log('');



// Task 13(5HW)

// Напишите ф-цию, которая должна проверить правильность ввода адреса
// эл. почты, неиспользуя регулярные выражения. Почта верна при условии:

// a. весь адрес не должен содержать русские буквы и спецсимволы, кроме
// одной «собачки», знака подчеркивания, дефиса и точки, причем они не могут
// быть первыми и последними в адресе, и идти подряд, например: «..», «@.»,
// «.@» или «@@», «_@», «@-», «--» и т.п.

// b. имя эл. почты (до знака @) должно быть длиной более 2 символов, причем
// имя может содержать только буквы, цифры, но не быть первыми и
// единственными в имени, и точку;

// c. после последней точки и после @, домен верхнего уровня (ru, by, com и
// т.п.) не может быть длиной менее 2 и более 11 символов.

function checkEmail(email) {

    const trueChars = [
        '@', '_', '-', '.', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,     
    ];

    const trueSymbols = ['@', '_', '-', '.'];

    let error = false;
    let point = email.lastIndexOf('.');
    let dog = email.indexOf('@');

    if (dog == -1) error = true;
    if (point == -1) error = true;
    if(dog != email.lastIndexOf('@')) error = true;


    if(trueSymbols.indexOf(email[0]) >= 0) error = true;
    for(let a = 0; a < email.substr(1).length; a++) {
        if(trueSymbols.indexOf(email[0]) >= 0 && trueSymbols.indexOf(email[a]) >= 0) {
            error = true;        
        }
    }


// Адрес 


    let emailName = email.slice(0, dog);

    let count = 0,
        pos = emailName.indexOf('.');

    while (pos !== -1) {
        count++;
        pos = emailName.indexOf('.', pos + 1);
    }
    if(count > 1) error = true;

    if(emailName < 2 && emailName > 15) error = true;
      
    for(let i = 0; i < email.length; i++) {
        if(trueChars.indexOf(email[i]) == -1) {
            error = true;
        } 
    }

    for (let b = 0; b < emailName.length; b++) {
        if((trueSymbols.indexOf(email[b]) + trueSymbols.indexOf(email[b+1]) > 3) || (trueSymbols.indexOf(email[b]) + trueSymbols.indexOf(email[b+1]) == 3)) {
            error = true;
        }
        if((trueSymbols.indexOf(email[b]) + trueSymbols.indexOf(email[b+1]) != 2) && (trueSymbols.indexOf(email[b]) + trueSymbols.indexOf(email[b+1]) > -1)) {
            error = true
        }
    }  

    
// После '@'
    
    let emailAfterDog = (point - dog) - 1;
    if(emailAfterDog <= 1 || emailAfterDog > 11) error = true;
    let c = dog + 1; 

    if(trueSymbols.indexOf(email[c]) > -1) error = true;

    for(let d = dog + 1; d < point - 1; d++) {
        if(trueSymbols.indexOf(email[d]) + trueSymbols.indexOf(email[d+1]) >= 2) {
            error = true;
        }
    }


// Домен

    let emailDomen = email.slice(point + 1, email.length);
    if(emailDomen.length <= 1 || emailDomen.length > 11) error = true;

    for(let e = (point + 1); e < email.length; e++) {
        if(trueSymbols.indexOf(email[e]) > -1) error = true;
    }



    return !error;
}

console.log(checkEmail('ja.a@jo-k_erruf.sasdad'));


console.log('');
console.log('');




// HW 7 ( JS )

// let Lightbulb = function (name) {
 
//     this.get = function () {
//         this.name = name;
//         this.power = +prompt('Введите мощность лампочки, Вт');
//         this.costEnergy = 0.209; //+prompt('Введите стоимость электроэнергии за 1Квт' + '/' + 'ч');
//         if (confirm('Включить лампочку?')) {
//             this.workTime = +prompt('Сколько времени работает лампочка? , ч');
//         } else {
//             this.workTime = 0;
//         };
 
//         this.operation();
//     };
 
//     this.operation = function () {
//         this.result = (this.power / 1000) * this.costEnergy * this.workTime;
 
//         this.show();
//     };
 
//     this.show = function () {
 
//         if (this.workTime == 0 || this.workTime == undefined) {
//             console.log('Лампочка "' + this.name + '" не включена');
//         } else {
//             console.log('Лампочка "' + this.name + '" проработала - ' + this.workTime + 'ч, и стоимость потраченой электроэнергии составляет = ' + this.result + 'р.');
//         }
//     };
// };
 
// let lightBulb = new Lightbulb('Кухня');
// lightBulb.get();
 
// let lightBulb2 = new Lightbulb('Коридор');
// lightBulb2.get();
 
// let lightBulb3 = new Lightbulb('Ванная');
// lightBulb3.get();
 
// let totalCost = lightBulb.result + lightBulb2.result + lightBulb3.result;
 
// console.log('Всего стоимость потраченной электроэнергии составляет - ' + totalCost + 'р');


console.log('');
console.log('');




let Calc = function() {

    this.get = function() {
        
        if (confirm('Включить калькулятор?')) {
            this.a = +prompt('Введите 1ое число: ');
            this.b = +prompt('Введите 2ое число: ');
            this.oper = prompt('Введите операцию: + , - , * , /, sqrt, hypot, abs');

            this.operation();

        } else {
            console.log('Не хотите, ну как хотите =\ бб =)')
        };
    };
    
    

    this.operation = function() {
        switch(this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;             
            break;
            case 'hypot':
                this.res = Math.hypot(this.a, this.b); 
                this.result = this.res;
            break
            case 'sqrt':
                this.res = Math.sqrt(this.a + this.b); 
                this.result = this.res;
            break 
            case 'abs':
                this.res = Math.abs(this.a + this.b); 
                this.result = this.res;
            break   
            default: this.result = 0
        };

        this.show();
    };

    this.show = function() {
        if(this.oper == 'hypot') {
            console.log(`${this.a} ${this.oper} ${this.b} = ${this.res}`);
        }
        if(this.oper == 'sqrt' || this.oper == 'abs') {
            console.log(`(${this.a} + ${this.b}) ${this.oper} = ${this.res}`);
        }

        if ((this.a == 0 || this.b == 0) && this.oper == '/') {
            console.log('Ошибка! Нельзя делить на ноль.')
        } else if (this.oper !== 'hypot' && this.oper !== 'sqrt' && this.oper !== 'abs'){
        console.log(`${this.a} ${this.oper} ${this.b} = ${this.result}`);
        }
        
    };
    
};

let calc = new Calc();
calc.get();


console.log('');
console.log('');




let Sportsmen = function(name, age, speed) {

    this.get = function() {
        if(confirm('Начинаем забег?')) {
            this.name = name;
            this.age = +age;
            this.runSpeed = +speed;
            this.range = +prompt('Введите дистанцию для бега(в киллометрах): ')

            this.run();

        } else {
            alert('Отдыхать так отдыхать! Тоже дело хорошее =)')
        };
    };

    this.run = function() {
        if(this.range < this.runSpeed) {
            this.runTime = Math.round((this.range / this.runSpeed) * 60);
        } else {
            this.runTime = this.range / this.runSpeed;
        };

        this.result();
    };  

    this.result = function() {
        if(this.range < this.runSpeed) {
            alert(`Athlete  ${this.name} ran a distance of ${this.range} kilometer in ${this.runTime} minutes with an average running speed of ${this.runSpeed} km / h. `)
        } else {
            alert(`Athlete ${this.name} ran a distance of ${this.range} kilometer in ${this.runTime} hours with an average running speed of ${this.runSpeed} km / h. `)
        }
            
    };

};

let sportsmen = new Sportsmen('Ann', 30, 25);
sportsmen.get();

let sportsmen2 = new Sportsmen('Bob', 50, 15);
sportsmen2.get();

let sportsmen3 = new Sportsmen('Alikper', 18, 35);
sportsmen3.get();