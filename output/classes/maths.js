"use strict";
// Principles of Object-Oriented Programming (OOP) in TypeScript
// 1. Encapsulation: Bundling data and methods that operate on that data within a single unit (class).
// 2. Inheritance: Creating new classes that are based on existing classes, allowing for code reuse and the creation of a hierarchical relationship between classes.
// 3. Polymorphism: The ability of different classes to be treated as instances of the same class through a common interface, allowing for flexibility and extensibility in code design.
// 4. Abstraction: Hiding the complex implementation details of a class and exposing only the necessary features and functionalities to the user, making it easier to use and understand.
// Class
class Maths {
    constructor() {
        this.PI = 3.14;
    }
    add(a, b, c = 0) {
        return a + b + c;
    }
    multiply(a, b, c = 0) {
        if (c === 0) {
            return a * b;
        }
        return a * b * c;
    }
}
const mathsInstance = new Maths();
console.log(mathsInstance.PI);
console.log("Sum of a, b and c = ", mathsInstance.add(2, 3, 4));
console.log("Sum of a and b = ", mathsInstance.add(2, 3));
