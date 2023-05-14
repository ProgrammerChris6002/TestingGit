console.log(5);

document.querySelector("#box").innerHTML = "External JavaScript";



let numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers);

// Indexing
console.log(numbers[0]);
console.log(numbers[4]);

numbers.pop(); // Remove from the end
console.log(numbers);

numbers.shift(); // Remove from the beggining
console.log(numbers);


// Adding Items

numbers.unshift(9); // Add to the beggining
console.log(numbers);

numbers.push(10);
console.log(numbers); // Add to the end


myname = "Ebuka";

console.log(myname.length);