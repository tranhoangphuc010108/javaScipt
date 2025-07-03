let a: number = 10;
let b: number = 20;

let c: number = a + b;
// node ./src/index.js
console.log(c);

enum Gender {
    Male = "male",
    Female = "female",
}
let e: Gender = Gender.Male;
console.log(e);

// tuple: mảng với số lượng và kiểu phần tử cố định
let f: [number, string] = [1, "hello"];
console.log(f);

//interface: định nghĩa cấu trúc cho object

interface Person {
    id: number;
    name: string;
    age: number;
    address?: {
        street: string;
        city: string;
        country: string;
    };
    // ?: optional có thể không có
}

let h: Person = { id: 1, name: "John", age: 20, address: { street: "123 Main St", city: "New York", country: "USA" } };

console.log(h.address?.street);


//union & literal types: kết hợp nhiều kiểu dữ liệu hoặc giá trị
//union: 
let i: number | string = 10;
i = "hello";

//literal types: kiểu dữ liệu cụ thể
let j: "male" | "female male" ;
j = "male";
j = "female";
j = "female male";