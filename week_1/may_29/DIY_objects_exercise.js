//creates an object for Rembert


// The astute reader notices that this is invalid Javascript. Fix this!
//var person = { firstName: 'Rembert', et cetera... }
//Using the object, your program should print something like this:
//$ node person.js
//Hello, I am Rembert Boom

let person = {
  first_name: 'Rembert',
  speak: function() {
    console.log('Hello, I am Rembert Boom');
  }
}

person.speak();
console.log(person.name);

//another way to solve this:
//let person = {
//first_name: 'Rembert',
//speak: function() {
    //console.log('Hello, I am Rembert Boom');
  //}
//}console.log('hello, I am ${this.name}')
