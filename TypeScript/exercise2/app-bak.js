function echo(data) {
    return data;
}
console.log(betterEcho("Max"));
console.log(betterEcho(12));
console.log(betterEcho({ name: "Max", age: 27 }));
function betterEcho(data) {
    return data;
}
// Buil in generics
var testResults = [123, 456];
testResults.push(3);
console.log(testResults);
function printAll(args) {
    args.forEach(function (element) { return console.log(element); });
}
printAll(["asdf", "sdfg"]);
// Generic types
var echo2 = betterEcho;
console.log(echo2("something"));
// Generic classes
var SimpleMath = /** @class */ (function () {
    function SimpleMath() {
    }
    SimpleMath.prototype.calculate = function () {
        return +this.baseValue * +this.multiplyValue;
    };
    return SimpleMath;
}());
var simpleMath = new SimpleMath();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = 11;
console.log(simpleMath.calculate());
