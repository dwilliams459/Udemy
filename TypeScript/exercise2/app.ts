function logged(constorFn: Function) {
  console.log(constorFn);
}

// @logged
// class Person {
//   constructor() {
//     console.log("Hello");
//   }
// }

// Factory
function logging(value: boolean) {
  return value ? logged : null;
}

@logging(false)
class Car {

}

function printable(constructorFN: Function) {
  constructorFN.prototype.print = function() {
    console.log(this);
  }
}
 
@logging(true)
@printable
class Plant {
  name = "Green Plant";
}
const plant = new Plant();
//console.log(plant.name);
//(<any>plant).print();


// Says: based on boolean 'value' set property (propName) to 'writable = true/false';
function editable(value: boolean) {
   return function(target: any,  propName: string,  descriptor: PropertyDescriptor) {
     descriptor.writable = value;
   }
}

class Project {
  projectName: string;

  constructor(name: string) {
    this.projectName = name;
  }

  @editable(false)  // will cause calcBudget to not be over-writable
  calcBudget() {
    console.log(1000);
  }
}

const project = new Project ("Super Project");
project.calcBudget();

// Override method calcBudget
project.calcBudget = function() {
  console.log(2000);
}
project.calcBudget();

