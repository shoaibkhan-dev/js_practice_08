const num = [1,2,3,4,5]
num.push(6,7,8)
console.log(num)



let count = 0;
function increment(){
    count++;
}

increment()

function decrement(){
    count--
}



const day = "saturday"
switch(day){
  case "monday":
    console.log("Utha bhai, nayi week shuru!");
    break;
  case "friday":
    console.log("Jumma Mubarak! 💫");
    break;
  case "sunday":
    console.log("Aaram ka din!");
    break;
  default:
    console.log("Bas ek aur normal din...")
}


const user = {
    name: "shoaib",
    price: 1000,
    age:23
}
 console.log(user["name"])