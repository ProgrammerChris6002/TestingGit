// document.querySelector(".container");

// var element = document.querySelector(".container");

// element.style.backgroundColor = "red";

// button

// var button = document.querySelector(".btn");

// button.addEventListener("click", function color() {
//     element.style.backgroundColor = "green";
// });

// button.onclick = function color(){
//     element.style.backgroundColor = "yellow";
// };

// let container = document.querySelector("#container");
// let btn = document.querySelector(".click");

// var nums = [1, 2, 3];
// console.log(nums);

// let names = ["Ebuka", "Kayce", "Micho", "John", "Daniel"];
// console.log(names.length);

// console.log(names);
// names.pop();
// console.log(names);

// names.shift();
// console.log(names);

// names.push("Bimpe");
// console.log(names);

// names.unshift("Smart");
// console.log(names);


// // Classwork

// let skills = ["HTML", "CSS", "JS"];
// console.log(skills);

// // a
// skills.push("Python");
// console.log(skills);

// // b
// skills.unshift("Django");
// console.log(skills);

// // c
// console.log(skills[3]);

// // d
// skills.shift(); // removes first item
// skills.pop(); // removes the last item
// console.log(skills);

let head = document.querySelector("h1");

let decrease = document.querySelector(".decrease");
let reset = document.querySelector(".reset");
let increase = document.querySelector(".increase");

let count = 0;

decrease.onclick = function reduce() {
    count--;
    head.innerHTML = count;
};

increase.onclick = function add() {
    count++;
    head.innerHTML = count;
};

reset.onclick = function res() {
    count = 0;
    head.innerHTML = count;
};