var _a;
var a = 10;
var b = 20;
var c = a + b;
// node ./src/index.js
console.log(c);
var Gender;
(function (Gender) {
    Gender["Male"] = "male";
    Gender["Female"] = "female";
})(Gender || (Gender = {}));
var e = Gender.Male;
console.log(e);
// tuple: mảng với số lượng và kiểu phần tử cố định
var f = [1, "hello"];
console.log(f);
var h = { id: 1, name: "John", age: 20, address: { street: "123 Main St", city: "New York", country: "USA" } };
console.log((_a = h.address) === null || _a === void 0 ? void 0 : _a.street);
