var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function logged(constorFn) {
    console.log(constorFn);
}
// @logged
// class Person {
//   constructor() {
//     console.log("Hello");
//   }
// }
// Factory
function logging(value) {
    return value ? logged : null;
}
var Car = /** @class */ (function () {
    function Car() {
    }
    Car = __decorate([
        logging(false)
    ], Car);
    return Car;
}());
function printable(constructorFN) {
    constructorFN.prototype.print = function () {
        console.log(this);
    };
}
var Plant = /** @class */ (function () {
    function Plant() {
        this.name = "Green Plant";
    }
    Plant = __decorate([
        logging(true),
        printable
    ], Plant);
    return Plant;
}());
var plant = new Plant();
//console.log(plant.name);
//(<any>plant).print();
// Says: based on boolean 'value' set property (propName) to 'writable = true/false';
function editable(value) {
    return function (target, propName, descriptor) {
        descriptor.writable = value;
    };
}
var Project = /** @class */ (function () {
    function Project(name) {
        this.projectName = name;
    }
    Project.prototype.calcBudget = function () {
        console.log(1000);
    };
    __decorate([
        editable(false) // will cause calcBudget to not be over-writable
    ], Project.prototype, "calcBudget", null);
    return Project;
}());
var project = new Project("Super Project");
project.calcBudget();
// Override method calcBudget
project.calcBudget = function () {
    console.log(2000);
};
project.calcBudget();
