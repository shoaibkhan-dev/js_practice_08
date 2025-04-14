

const person = {
    name : "shoaib",
    age : 23,
    nationality : "Pakistani",
    welcomeMessage : function(){
      console.log(`${this.name}`)
    }
}

console.log(person["nationality"])
person.age = 25;
console.log(person.age);
Object.freeze
person.age = 29;
console.log(person.age)

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

document.getElementById = ("img").onclick = ;


// let day = "saturday";
// switch(day){
//    case  "monday":
//    console.log("A working day");
//    break;
//    case  "tuesday":
//    console.log("A normal day");
//    case "sunday":
//    console.log("A hodiday");
//    break;
//    default:
//       console.log("invalid data");
//       alert("leave me alone")
// }


// function increment(){
//    console.log(10 * 10)
// }
// increment()

// function decrement(){
//    console.log(10 + 10)
// }
// decrement();

const day = 4;
switch(day){
   case 1:
      console.log("monday");
    break
   case 2:
      console.log("tuesday");
    break
   case 3:
      console.log("wednesday");
    break
   case 4:
      console.log("thursday");
    break
   default:
      console.log("not in list");
}