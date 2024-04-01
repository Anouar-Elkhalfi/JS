console.log("Hello World") // afficher Hello World
// let xp; //déclatrer une variable
let xp = 0;//Initialize your xp variable to have a value of 0, a number.
let health = 100;
let gold = 50;
let currentWeapon = 0;//camelCase (multiple words)
let fighting;
let monsterHealth;
let varString = "stick";// variable as a string
let inventory = ["stick","dagger","sword"]; // variable as array of strings

const button1 = document.querySelector ('#button1');
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const text = document.querySelector('#text');
const xpText = document.querySelector('#xpText');
const healthText = document.querySelector('#healthText');
const goldText = document.querySelector('#goldText');
const monsterStats = document.querySelector('#monsterStats');
const monsterName = document.querySelector('#monsterName');
const monsterHealthText = document.querySelector ("#monsterHealth");
function goStore() {                      //Déclarer une fonction
  console.log("Going to store.");
}
function goCave() {
  console.log("Going to cave.");
}
function fightDragon() {
  console.log("Fighting dragon.");
}
button1.onclick = goStore;
button2.onclick = goCave;
button3.onclick = fightDragon;
