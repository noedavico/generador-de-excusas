/* eslint-disable */
import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload;
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let rand_who = Math.floor(Math.random() * who.length);
let rand_action = Math.floor(Math.random() * action.length);
let rand_what = Math.floor(Math.random() * what.length);
let rand_when = Math.floor(Math.random() * when.length);

const combined = [].concat(rand_who, rand_action, rand_what, rand_when);
console.log(combined);
