let Sportsmen = function(name, age, speed) {

    this.get = function() {
        if(confirm('Начинаем забег?')) {
            this.name = name;
            this.age = +age;
            this.runSpeed = +speed;
            this.range = +prompt('Введите дистанцию для бега(в киллометрах): ');
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

    this.showName = function() {
        alert(this.name)
    }
};

let sportsmen = new Sportsmen('Ann', 30, 25);
sportsmen.get();

let sportsmen2 = new Sportsmen('Bob', 50, 15);
sportsmen2.get();

let sportsmen3 = new Sportsmen('Alikper', 18, 35);
sportsmen3.get();


console.log('');
console.log('');

let Sportsmen4 = function(name, age, speed) {
    Sportsmen.apply(this, arguments)

        let results = function() {

            if(sportsmen.range != sportsmen2.range || sportsmen.range != sportsmen3.range || sportsmen.range != sportsmen4.range) {
                alert('Дистанции разные, насяльника! Сложна поЩитате шушуть!');
            } else {
                if(sportsmen.runTime < sportsmen2.runTime && sportsmen.runTime < sportsmen3.runTime && sportsmen.runTime < sportsmen4.runTime) {
                    alert(`Спортсмен ${sportsmen.name} занимает 1ое место! Вы лучший!`)
        
                } else if((sportsmen.runTime > sportsmen2.runTime && sportsmen.runTime < sportsmen3.runTime && sportsmen.runTime < sportsmen4.runTime) || (sportsmen.runTime < sportsmen2.runTime && sportsmen.runTime < sportsmen3.runTime && sportsmen.runTime > sportsmen4.runTime) || (sportsmen.runTime < sportsmen2.runTime && sportsmen.runTime > sportsmen3.runTime && sportsmen.runTime < sportsmen4.runTime)) {
                    alert(`Спортсмен ${sportsmen.name} занимает 2е место! Почти победа, так держать!`)
        
                } else if((sportsmen.runTime > sportsmen2.runTime && sportsmen.runTime > sportsmen3.runTime && sportsmen.runTime < sportsmen4.runTime) || (sportsmen.runTime < sportsmen2.runTime && sportsmen.runTime > sportsmen3.runTime && sportsmen.runTime > sportsmen4.runTime) || (sportsmen.runTime > sportsmen2.runTime && sportsmen.runTime < sportsmen3.runTime && sportsmen.runTime > sportsmen4.runTime)) {
                    alert(`Спортсмен ${sportsmen.name} занимает 3е место! Неплохо!`)
        
                } else if (sportsmen.runTime > sportsmen2.runTime && sportsmen.runTime > sportsmen3.runTime && sportsmen.runTime > sportsmen4.runTime) {
                    alert(`Спортсмен ${sportsmen.name} занимает 4ое место! Не вешать нос!`)
                
                }
        
                if(sportsmen2.runTime < sportsmen.runTime && sportsmen2.runTime < sportsmen3.runTime && sportsmen2.runTime < sportsmen4.runTime) {
                    alert(`Спортсмен ${sportsmen2.name} занимает 1ое место! Вы лучший!`)
        
                } else if((sportsmen2.runTime > sportsmen.runTime && sportsmen2.runTime < sportsmen3.runTime && sportsmen2.runTime < sportsmen4.runTime) || (sportsmen2.runTime < sportsmen.runTime && sportsmen2.runTime < sportsmen3.runTime && sportsmen2.runTime > sportsmen4.runTime) || (sportsmen2.runTime < sportsmen.runTime && sportsmen2.runTime > sportsmen3.runTime && sportsmen2.runTime < sportsmen4.runTime)) {
                    alert(`Спортсмен ${sportsmen2.name} занимает 2е место! Почти победа, так держать!`)
        
                } else if((sportsmen2.runTime > sportsmen.runTime && sportsmen2.runTime > sportsmen3.runTime && sportsmen2.runTime < sportsmen4.runTime) || (sportsmen2.runTime < sportsmen.runTime && sportsmen2.runTime > sportsmen3.runTime && sportsmen2.runTime > sportsmen4.runTime) || (sportsmen2.runTime > sportsmen.runTime && sportsmen2.runTime < sportsmen3.runTime && sportsmen2.runTime > sportsmen4.runTime)) {
                    alert(`Спортсмен ${sportsmen2.name} занимает 3е место! Неплохо!`)
        
                } else if (sportsmen2.runTime > sportsmen.runTime && sportsmen2.runTime > sportsmen3.runTime && sportsmen2.runTime > sportsmen4.runTime) {
                    alert(`Спортсмен ${sportsmen2.name} занимает 4ое место! Не вешать нос!`)
                
                }
        
                if(sportsmen3.runTime < sportsmen.runTime && sportsmen3.runTime < sportsmen2.runTime && sportsmen3.runTime < sportsmen4.runTime) {
                    alert(`Спортсмен ${sportsmen3.name} занимает 1ое место! Вы лучший!`)
        
                } else if((sportsmen3.runTime > sportsmen.runTime && sportsmen3.runTime < sportsmen2.runTime && sportsmen3.runTime < sportsmen4.runTime) || (sportsmen3.runTime < sportsmen.runTime && sportsmen3.runTime > sportsmen2.runTime && sportsmen3.runTime < sportsmen4.runTime) || (sportsmen3.runTime < sportsmen.runTime && sportsmen3.runTime < sportsmen2.runTime && sportsmen3.runTime > sportsmen4.runTime)) {
                    alert(`Спортсмен ${sportsmen3.name} занимает 2е место! Почти победа, так держать!`)
        
                } else if((sportsmen3.runTime > sportsmen.runTime && sportsmen2.runTime < sportsmen3.runTime && sportsmen3.runTime < sportsmen4.runTime) || (sportsmen3.runTime > sportsmen.runTime && sportsmen2.runTime > sportsmen3.runTime && sportsmen3.runTime > sportsmen4.runTime) || (sportsmen3.runTime < sportsmen.runTime && sportsmen2.runTime < sportsmen3.runTime && sportsmen3.runTime > sportsmen4.runTime)) {
                    alert(`Спортсмен ${sportsmen3.name} занимает 3е место! Неплохо!`)
        
                } else if (sportsmen3.runTime > sportsmen.runTime && sportsmen2.runTime < sportsmen3.runTime && sportsmen3.runTime > sportsmen4.runTime) {
                    alert(`Спортсмен ${sportsmen3.name} занимает 4ое место! Не вешать нос!`)
                
                }
        
                if(sportsmen4.runTime < sportsmen.runTime && sportsmen4.runTime < sportsmen2.runTime && sportsmen3.runTime > sportsmen4.runTime) {
                    alert(`Спортсмен ${sportsmen4.name} занимает 1ое место! Вы лучший!`)
        
                } else if((sportsmen4.runTime < sportsmen.runTime && sportsmen4.runTime > sportsmen2.runTime && sportsmen3.runTime > sportsmen4.runTime) || (sportsmen4.runTime > sportsmen.runTime && sportsmen4.runTime < sportsmen2.runTime && sportsmen3.runTime > sportsmen4.runTime) || (sportsmen4.runTime < sportsmen.runTime && sportsmen4.runTime < sportsmen2.runTime && sportsmen3.runTime < sportsmen4.runTime)) {
                    alert(`Спортсмен ${sportsmen4.name} занимает 2е место! Почти победа, так держать!`)
        
                } else if((sportsmen4.runTime < sportsmen.runTime && sportsmen4.runTime > sportsmen2.runTime && sportsmen3.runTime < sportsmen4.runTime) || (sportsmen4.runTime > sportsmen.runTime && sportsmen2.runTime > sportsmen4.runTime && sportsmen3.runTime < sportsmen4.runTime) || (sportsmen4.runTime > sportsmen.runTime && sportsmen4.runTime > sportsmen2.runTime && sportsmen3.runTime > sportsmen4.runTime)) {
                    alert(`Спортсмен ${sportsmen4.name} занимает 3е место! Неплохо!`)
        
                } else if (sportsmen4.runTime > sportsmen.runTime && sportsmen2.runTime < sportsmen4.runTime && sportsmen3.runTime < sportsmen4.runTime) {
                    alert(`Спортсмен ${sportsmen4.name} занимает 4ое место! Не вешать нос!`)
                
                }
            }
            
        }

    this.showName = function() {
        alert(this.name)
    }

    this.show = function() {
        results();
    }
    
}

let sportsmen4 = new Sportsmen4('Valerka', 18, 50)
sportsmen4.get();