function echo(data: any) {
  return data;
}

console.log (betterEcho("Max"));
console.log (betterEcho<number>(12));
console.log (betterEcho({name: "Max", age: 27}));

function betterEcho<T>(data: T) {
  return data;
}

// Buil in generics
const testResults: Array<number> = [123,456]
testResults.push(3);
console.log(testResults);

function printAll<T>(args: T[]) {
  args.forEach(element => console.log(element));
}

printAll<string>(["asdf", "sdfg"]); 

// Generic types
const echo2: <T>(data:T) => T = betterEcho;
console.log(echo2<string>("something"));

// Generic classes
class SimpleMath<T extends number | string, U extends number | string> {
  baseValue: T;
  multiplyValue: U;
  calculate() {
    return +this.baseValue * +this.multiplyValue;
  }
}

const simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 11;
console.log(simpleMath.calculate());


