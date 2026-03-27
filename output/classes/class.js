"use strict";
// A class is an object-oriented programming concept that allows you to create objects with
// properties and methods.
// It serves as a blueprint for creating instances of objects.
class Student {
    // Parameterized constructor to initialize properties
    constructor(name, age, grade) {
        console.log("Constructor called");
        this.name = name;
        this.age = age;
        this.grade = grade;
    }
}
const john = new Student("John Doe", 20, "A");
const vishnu = new Student("Vishnu", 22, "B");
console.log(john.name); // Output: John Doe
console.log(vishnu.name); // Output: Vishnu
