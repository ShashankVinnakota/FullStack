console.log("Hello, World!");

let nam = "Shashank";
const age1= 21;

let person = {
    name : 'shashank',
    age : 21
}

let Students = ["Shashank","Luffy"]

function greet(name){
    console.log("Hello, World! " + name);
}

console.log(typeof(age))
console.log(person)
greet("sh");




let username;

document.getElementById("mySubmit").onclick = function() {
   username = document.getElementById("myInput").value;
    alert("Hello, " + username + "!");
} 


// arrays + objects + destructuring
students = [
    { name: "A", age: 20 },
    { name: "B", age: 22 },
    { name: "C", age: 24 }
  ]
let [{name} , {age}] = students

console.log(name + " is " + age + " years old.")

console.log("Start")

setTimeout(() => {
    console.log("Data Recieved");


} , 2000);

console.log("End")