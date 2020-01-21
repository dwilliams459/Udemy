class Car {
    public acceleration: number;

    constructor(public name: string)
    {
        this.name = name;
        this.acceleration = 0;
    }

    public honk() {
        console.log("Tooot");
    }

    public accelerate(speed: number)  {
        this.acceleration = this.acceleration + speed;
    }
}

let car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);
 
// Exercise 2 - Two objects, based on each other ...
abstract class BaseObject {
    public width: number = 0;
    public length: number = 0;
};

class Rectangle extends BaseObject {
    constructor() {
        super();
        this.width = 5;
        this.length = 2;
    }

    public calcSize() {
        return this.width * this.length;
    }
}

let rect = new Rectangle();
console.log("calcSize " + rect.calcSize());

// Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
class Person {
    constructor(firstName: string) {
        this._firstName = firstName;
     }

    private _firstName: string;
    get FirstName(): string {
        return this._firstName;
    }
    set FirstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        }
        // else {
        //     this._firstName = "";
        // }    
    }
}

let person = new Person("asdf");
//     enumerable: true,
//     configurable: true

console.log(person.FirstName);
person.FirstName = "Ma";
console.log(person.FirstName);
person.FirstName = "Maximilian";
console.log(person.FirstName);


// // Exercise 2 - Two objects, based on each other ...
// var baseObject = {
//     width: 0,
//     length: 0
// };
// var rectangle = Object.create(baseObject);
// rectangle.width = 5;
// rectangle.length = 2;
// rectangle.calcSize = function() {
//     return this.width * this.length;
// };
// console.log(rectangle.calcSize());
 
// // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
// var person = {
//     _firstName: ""
// };
// Object.defineProperty(person, "firstName", {
//     get: function () {
//         return this._firstName;
//     },
//     set: function (value) {
//         if (value.length > 3) {
//             this._firstName = value;
//         }
//         else {
//             this._firstName = "";
//         }
//     },
//     enumerable: true,
//     configurable: true
// });
// console.log(person.firstName);
// person.firstName = "Ma";
// console.log(person.firstName);
// person.firstName = "Maximilian";
// console.log(person.firstName);