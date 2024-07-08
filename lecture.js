const gonzalosShoes = {
  shoes: [],
  shoeCount: 0,
  addShoe({brand, color, size}) {
    const shoe = {brand, color, size};
    this.shoes.push(shoe);
    this.shoeCount++;
    return `${shoe.brand} shoe added`
  }
}

console.log(gonzalosShoes.addShoe({brand: "nike", color: "black", size: 12}));
console.log(gonzalosShoes.shoes);
console.log(gonzalosShoes.shoeCount);

const gonzalosKids = {
  kids: [],
  kidCount: 0,
  addFavoriteDish(dish){
    console.log(`Gonzalo's favorite dish is ${dish}`);
  }
}

const noah = { // encapsulation we keep all the data and functionality together
  name: "Noah",//data
  age: 4,//data
  favoriteDish: "pizza",//data
  getName(){//functionality
    return this.name;
  },
  changeAge(newAge){//functionality
    this.age = newAge;
    return `Noah's age is now ${this.age}`
  },
  orderFavoriteDish(){//functionality
    return `Noah orders a ${this.favoriteDish} // "Noah orders a whatever his favorite dish is"`
  },
  changeFavoriteDish(newDish){//functionality
    this.favoriteDish = newDish;
    return `Noah's favorite dish is now ${this.favoriteDish}`
  }
}

noah.getName();// "Noah"

const andy = { // encapsulation we keep all the data and functionality together
  name: "andy",//data
  age: 11,//data
  favoriteDish: "ice cream",//data
  getName(){//functionality
    return this.name;
  },
  changeAge(newAge){//functionality
    this.age = newAge;
    return `Andy's age is now ${this.age}`
  },
  orderFavoriteDish(){//functionality
    return `Andy orders a ${this.favoriteDish} // "Noah orders a whatever his favorite dish is"`
  },
  changeFavoriteDish(newDish){//functionality
    this.favoriteDish = newDish;
    return `Andy's favorite dish is now ${this.favoriteDish}`
  }
}

const MakePerson = (name, age, favoriteDish) => {
  return {
    name,
    age,
    favoriteDish,
    // getName(){
    //   return this.name;
    // },
    // changeAge(newAge){
    //   this.age = newAge;
    //   return `${this.name}'s age is now ${this.age}`
    // },
    // orderFavoriteDish(){
    //   return `${this.name} orders a ${this.favoriteDish}`
    // },
    // changeFavoriteDish(newDish){
    //   this.favoriteDish = newDish;
    //   return `${this.name}'s favorite dish is now ${this.favoriteDish}`
    // }
  }
}
MakePerson.prototype.getName = function(){
  return this.name;
}
MakePerson.prototype.changeAge = function(newAge){
  this.age = newAge;
  return `${this.name}'s age is now ${this.age}`
}
MakePerson.prototype.orderFavoriteDish = function(){
  return `${this.name} orders a ${this.favoriteDish}`
}

// const ben = makePerson("ben", 33, "curry anything");
// console.log(ben) // {name: "ben", age: 33, favoriteDish: "curry anything", getName: ƒ, changeAge: ƒ, orderFavoriteDish: ƒ, changeFavoriteDish: ƒ}
// const gonzalo = makePerson("gonzalo", 36, "corn dog");
// console.log(gonzalo) // {name: "gonzalo", age: 36, favoriteDish: "corn dog", getName: ƒ, changeAge: ƒ, orderFavoriteDish: ƒ, changeFavoriteDish: ƒ}
const ben = new MakePerson("ben", 33, "curry anything");
console.log(ben)// {name: "ben", age: 33, favoriteDish: "curry anything"} prototype: {getName: ƒ, changeAge: ƒ, orderFavoriteDish: ƒ}
const gonzalo = new MakePerson("gonzalo", 36, "corn dog");
console.log(gonzalo)// {name: "gonzalo", age: 36, favoriteDish: "corn dog"} prototype: {getName: ƒ, changeAge: ƒ, orderFavoriteDish: ƒ}

class Person {

  constructor(name, age, favoriteDish){
    this.name = name;
    this.age = age;
    this.favoriteDish = favoriteDish;
  }

  getName(){
    return this.name;
  }
  changeAge(newAge){
    this.age = newAge;
    return `${this.name}'s age is now ${this.age}`
  }
  orderFavoriteDish(){
    return `${this.name} orders a ${this.favoriteDish}`
  }
  changeFavoriteDish(newDish){
    this.favoriteDish = newDish;
    return `${this.name}'s favorite dish is now ${this.favoriteDish}`
  }
}

const ben2 = new Person("ben", 33, "curry anything");
console.log(ben2)// {name: "ben", age: 33, favoriteDish: "curry anything"} prototype: {getName: ƒ, changeAge: ƒ, orderFavoriteDish: ƒ}

// global scope

let word = "hello";

const newClosure = () => {
  let counter = 0;
  console.log(word);// can reference the variable in the global scope
  return () => {// can reference the variable in the outer function
    counter++;
    return counter;
  }
}

word = "goodbye";
counter = 100;// ReferenceError: counter is not defined


const getId = () => {
  let id = 0;
  return () => {
    id++;
    return id;
  }
}

const makeId = getId();

console.log(makeId());// 1
console.log(makeId());// 2
console.log(makeId());// 3