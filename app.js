let firstName = "John";
let lastName = "Doe";
let age = 35;
let isRegistered = true;
let isStudent = false;

let x = 5;
let y = 10;
let z = x + y;

let student1 = {
  firstName: "John",
  lastName: "Doe",
  age: 35,
  isRegistered: true,
  exam: {
    midterm: 90,
    final: 95,
  },
};
let student2 = {
  firstName: "student2",
  lastName: "Doe",
  age: 30,
  isRegistered: false,
  exam: {
    midterm: 40,
    final: 65,
  },
};

let student3 = {
  firstName: "student3",
  lastName: "Doe",
  age: 20,
  isRegistered: true,
  exam: {
    midterm: 13,
    final: 80,
  },
};

let students = [student1, student2, student3];

const firstIndex = 0;
const secondIndex = 1;
const thirdIndex = 2;
console.log(students[firstIndex].age, students[firstIndex].firstName);
console.log(students[secondIndex].age, students[secondIndex].firstName);
console.log(students[thirdIndex].age, students[thirdIndex].firstName);

let person = {
  firstName: "Giorgi",
  lastName: "Doe",
  age: 18,
  isRegisteredLinkedin: false,
  address: {
    number: 123,
    street: "Main St",
    city: "Boston",
  },
  skills: ["JavaScript", "HTML", "CSS"],
};

// console.log(person);
// console.log(person.skills[2]);

// delete person["age"];

// person.age = 50;
// person["firstName"] = "Jane";
// console.log(person.firstName);
for (let item in person) {
  console.log(item, person[item]);
}

console.log(person.age);
if (
  person.age >= 18 &&
  (person.isRegisteredLinkedin || person.address.city === "Boston")
) {
  console.log(`${person.firstName} სრულწლოვანია`);
} else {
  console.log(`${person.firstName} არასრულწლოვანია`);
}
