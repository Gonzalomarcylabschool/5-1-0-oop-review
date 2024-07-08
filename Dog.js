export class Dog {
  static #sound = 'Woof!';
  static #allDogs = [];
  
// Create
  constructor(name, breed, age, color) {
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.color = color;
    Dog.#allDogs.push(this);
  }
// all methods should be some form of CRUD
  bark() {
    return Dog.#sound;
  }
// Read only
  getName() { 
    return this.name;
  }
  getBreed() {
    return this.breed;
  }
  getAge() {
    return this.age;
  } 
  getColor() {
    return this.color;
  } 
  getAllDogInfo() {
    return `Name: ${this.name}, Breed: ${this.breed}, Age: ${this.age}, Color: ${this.color}`;
  }
// Update
  updateName(newName) {
    this.name = newName;
    return `Name is now ${this.name}`;
  }
  updateBreed(newBreed) {
    this.breed = newBreed;
    return `Breed is now ${this.breed}`;
  }
  updateAge(newAge) {
    this.age = newAge;
    return `Age is now ${this.age}`;
  }
  updateColor(newColor) {
    this.color = newColor;
    return `Color is now ${this.color}`;
  }
// Delete
  static deleteDog(dogName) {
    Dog.#allDogs = Dog.#allDogs.filter(dog => dog.name !== dogName);
    return Dog.#allDogs;
  }
  static deleteAllDogs() {
    Dog.#allDogs = [];
    return Dog.#allDogs;
  }
// Read only
  static getAllDogs() {
    return Dog.#allDogs;
  }
}