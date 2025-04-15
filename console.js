/*
let maxRand = 60;
let minRand = 30;
let numRand =Math.floor(Math.random()*(maxRand-minRand))+minRand;
console.log(numRand);
*/

const myBtn =document.getElementById('myBtn');
const myRan =document.getElementById('myRan');

let minRand=30;
let maxRand=60;
let numRand;

myBtn.onclick = function(){
 numRand = Math.floor(Math.random()* (maxRand-minRand))+minRand;
 myRan.textContent= numRand;
}
