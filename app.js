

// const person = {
//     name : "shoaib",
//     age : 23,
//     nationality : "Pakistani",
//     welcomeMessage : function(){
//       console.log(`${this.name}`)
//     }
// }

// console.log(person["nationality"])
// person.age = 25;
// console.log(person.age);
// Object.freeze
// person.age = 29;
// console.log(person.age)

function Car (color, model, year){
     this.color = color;
     this.model = model;
     this.year = year;
     this.start = function(){
        console.log(this.model+ " is started")
     }
}

const car1 = new Car ("black", "honda", 2024);
const car2 = new Car ("grey", "toyota", 2022);
const car3 = new Car ("white", "buggati", 2025);

car1.start()
car2["start"]()
car3.start()

function greetTheUser(){
   alert("helloooo User")
  
}