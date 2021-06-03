
// var logOne = setTimeout(function () {
//   console.log("one!");
// }, Math.random() * 1000);

// var logTwo = setTimeout(function () {
//   console.log("two!");
// }, Math.random() * 1000);

// Write a function called inOrder that accepts two callbacks and invokes them in order. Implement inOrder using the callback pattern.

var inOrder = function () {
    var logOne = setTimeout(function () {
        console.log("one!");

        var logTwo = setTimeout(function () {
            console.log("two!");

        }, Math.random() * 1000);

    }, Math.random() * 1000);
};
// -----------------Refactor inOrder to use promises.-----------

// function logOne () {
//   return new Promise(resolve=>{
//     setTimeout(function () {
//       resolve();
//       console.log("one!");
//     }, Math.random() * 1000);
//   })
// }

// function logTwo () {
//   return new Promise(resolve=>{
//     setTimeout(function () {
//       resolve();
//       console.log("two!");
//     }, Math.random() * 1000);
//   })
// }

// async function inOrder(logOne,logTwo){
//   const result = await logOne();
//   const result1 = await logTwo();
// }

// inOrder(logOne,logTwo);


function trainingSandbox() {
    console.log("%c ⏩ Training startet...", "color:#039BE5");

    console.log("%c ⛔ Problem sir!", "color:orangered");

    inOrder();

}



const main = () => {
    console.log("%c ✔ DOM Mounted!", "color:#bada55");
    printHeader();
    trainingSandbox()

}

document.addEventListener("DOMContentLoaded", main);


function printHeader() {
    console.log("%c ✔ Header printed!", "color:#bada55");
    document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

}
