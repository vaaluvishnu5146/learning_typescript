"use strict";
// A class is an object-oriented programming concept that allows you to create objects with
// properties and methods.
// It serves as a blueprint for creating instances of objects.
class Student {
    // Parameterized constructor to initialize properties
    constructor(name, age, grade) {
        console.log("Constructor called");
        this._name = name;
        this._age = age;
        this._grade = grade;
    }
    set name(name) {
        if (name.length < 1)
            throw new Error("Name cannot be empty");
        console.log("Setting name");
        this._name = name;
    }
    get name() {
        console.log("Getting name");
        return this._name;
    }
    set age(age) {
        this._age = age;
    }
    get age() {
        return this._age;
    }
    set grade(grade) {
        this._grade = grade;
    }
    get grade() {
        return this._grade;
    }
    getInfo() {
        return `Name: ${this._name}, Age: ${this._age}, Grade: ${this._grade}`;
    }
}
const john = new Student("John Doe", 20, "A");
const vishnu = new Student("Vishnu", 22, "B");
console.log(john.getInfo());
console.log(vishnu.getInfo());
