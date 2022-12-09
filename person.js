class Person {
  constructor(name, age, salary, gender) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    this.gender = gender;
  }
}
var employee1 = new Person("Keerthana", 23, 30000, "female");
var employee2 = new Person("Dinesh",    25, 30000, "male");
var employee3 = new Person("Siva",      23, 30000, "male");
var employee4 = new Person("Harish",    25, 30000, "male");
console.log(employee1.name, employee1.age, employee1.salary,employee1.gender);
console.log(employee2.name, employee2.age, employee2.salary,employee2.gender);
console.log(employee3.name, employee3.age, employee3.salary,employee3.gender);
console.log(employee4.name, employee4.age, employee4.salary,employee4.gender);

// OUTPUT:
// person.js:13 Keerthana 23 30000 female
// person.js:14 Dinesh 25 30000 male
// person.js:15 Siva 23 30000 male
// person.js:16 Harish 25 30000 male
