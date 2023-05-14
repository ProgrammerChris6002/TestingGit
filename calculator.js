var first = document.querySelector(".one");
var second = document.querySelector(".two");

var ans = document.querySelector(".answer");
var btn = document.querySelector(".btn");


btn.addEventListener("click", function () {
    var myvalue1 = parseInt(first.value);
    // console.log(myvalue);
    var myvalue2 = parseInt(second.value);

    var sum = myvalue1 + myvalue2;

    ans.innerHTML = sum;
});

// parseInt()

console.log(14 + 2); // 16
console.log('14' + '2'); // 142