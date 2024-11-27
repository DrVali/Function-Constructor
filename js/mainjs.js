"use strict";
function Persons(first, last, age) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  console.log(
    `hellow ${this.firstName} ${this.lastName}, ${this.age} years old from Iran`
  );

  greet: {
    alert(
      `hellow ${this.firstName} ${this.lastName}, ${this.age} years old from Iran`
    );
  }
}

const myName = new Persons("ali", "ahmadi", 32);
