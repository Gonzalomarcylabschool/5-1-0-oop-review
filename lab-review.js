// const gonzalosShoes = {
//   shoes: [],
//   shoeCount: 0,
//   addShoe({brand, color, size}) {
//     const shoe = {brand, color, size};
//     this.shoes.push(shoe);
//     this.shoeCount++;
//     return `${shoe.brand} shoe added`
//   }
// }

// console.log(gonzalosShoes.addShoe({brand: "nike", color: "black", size: 12}));
// console.log(gonzalosShoes.shoes);
// console.log(gonzalosShoes.shoeCount);

// const gonzalosKids = {
//   kids: [],
//   kidCount: 0,
//   addFavoriteDish(dish){
//     console.log(`Gonzalo's favorite dish is ${dish}`);
//   }
// }

// const noah = { // encapsulation we keep all the data and functionality together
//   name: "Noah",//data
//   age: 4,//data
//   favoriteDish: "pizza",//data
//   getName(){//functionality
//     return this.name;
//   },
//   changeAge(newAge){//functionality
//     this.age = newAge;
//     return `Noah's age is now ${this.age}`
//   },
//   orderFavoriteDish(){//functionality
//     return `Noah orders a ${this.favoriteDish} // "Noah orders a whatever his favorite dish is"`
//   },
//   changeFavoriteDish(newDish){//functionality
//     this.favoriteDish = newDish;
//     return `Noah's favorite dish is now ${this.favoriteDish}`
//   }
// }

// noah.getName();// "Noah"

// const andy = { // encapsulation we keep all the data and functionality together
//   name: "andy",//data
//   age: 11,//data
//   favoriteDish: "ice cream",//data
//   getName(){//functionality
//     return this.name;
//   },
//   changeAge(newAge){//functionality
//     this.age = newAge;
//     return `Andy's age is now ${this.age}`
//   },
//   orderFavoriteDish(){//functionality
//     return `Andy orders a ${this.favoriteDish} // "Noah orders a whatever his favorite dish is"`
//   },
//   changeFavoriteDish(newDish){//functionality
//     this.favoriteDish = newDish;
//     return `Andy's favorite dish is now ${this.favoriteDish}`
//   }
// }

// const MakePerson = (name, age, favoriteDish) => {
//   return {
//     name,
//     age,
//     favoriteDish,
//     // getName(){
//     //   return this.name;
//     // },
//     // changeAge(newAge){
//     //   this.age = newAge;
//     //   return `${this.name}'s age is now ${this.age}`
//     // },
//     // orderFavoriteDish(){
//     //   return `${this.name} orders a ${this.favoriteDish}`
//     // },
//     // changeFavoriteDish(newDish){
//     //   this.favoriteDish = newDish;
//     //   return `${this.name}'s favorite dish is now ${this.favoriteDish}`
//     // }
//   }
// }
// MakePerson.prototype.getName = function(){
//   return this.name;
// }
// MakePerson.prototype.changeAge = function(newAge){
//   this.age = newAge;
//   return `${this.name}'s age is now ${this.age}`
// }
// MakePerson.prototype.orderFavoriteDish = function(){
//   return `${this.name} orders a ${this.favoriteDish}`
// }

// // const ben = makePerson("ben", 33, "curry anything");
// // console.log(ben) // {name: "ben", age: 33, favoriteDish: "curry anything", getName: ƒ, changeAge: ƒ, orderFavoriteDish: ƒ, changeFavoriteDish: ƒ}
// // const gonzalo = makePerson("gonzalo", 36, "corn dog");
// // console.log(gonzalo) // {name: "gonzalo", age: 36, favoriteDish: "corn dog", getName: ƒ, changeAge: ƒ, orderFavoriteDish: ƒ, changeFavoriteDish: ƒ}

// class Person {
//   constructor(name, age, favoriteDish){
//     this.name = name;
//     this.age = age;
//     this.favoriteDish = favoriteDish;
//   }
//   getName(){
//     return this.name;
//   }
//   changeAge(newAge){
//     this.age = newAge;
//     return `${this.name}'s age is now ${this.age}`
//   }
//   orderFavoriteDish(){
//     return `${this.name} orders a ${this.favoriteDish}`
//   }
// }

// const adrian = new Person("adrian", 12, "water");


class Student {
  #id; 

  constructor(name, grade) {
    this.name = name;
    this.grade = grade;
    this.#id = Student.generateId(); 
  }

  static generateId() {
    let id = 0
    const makeId = () => {
      return ++id;
    }
    return makeId();
    }

  getId() {
    return this.#id;
  }
}


class Teacher {
  #id; // Private variable
  #students = []; // Private variable
  static #allTeachers = []; // Private variable

  constructor(name, subject) {
    this.name = name;
    this.subject = subject;
    this.#id = Teacher.generateId();
    Teacher.#allTeachers.push(this);
  }

  static generateId() {
    let id = 0
    const makeId = () => {
      return id++;
    }
    return makeId();
    }

  addStudent(student) {
    this.#students.push(student);
    console.log(`${student.name} with ID ${student.getId()} has been added to ${this.name}'s class.`);
  }

  listStudents() {
    console.log(`Students in ${this.name}'s class:`);
    this.#students.forEach(student => {
      console.log(`${student.name} with ID ${student.getId()} - Grade: ${student.grade}`);
    });
  }

  static getTeachers() {
    return [...Teacher.#allTeachers];
    // return Teacher.#allTeachers; DON'T DO THIS
  }
}

const adrian = new Student("adrian", 12);
console.log(adrian)
console.log(adrian.getId())
const gonzalo = new Teacher("gonzalo", "math"); // now there is 1 teacher
console.log(gonzalo)
gonzalo.addStudent(adrian);
console.log(gonzalo.listStudents())

const alex = new Student("alex", 12);
gonzalo.addStudent(alex);
gonzalo.listStudents();

console.log(Teacher.getTeachers());
const ben = new Teacher("ben", "science");// now there are 2 teacher
console.log(Teacher.getTeachers());