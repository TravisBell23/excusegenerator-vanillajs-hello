/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onclick = function() {
  //write your code here
  let noun = ["my dog", "a fish", "the tiger", "the cat"];
  let verb = ["broke", "fixed", "smelled", "punched"];
  let object = ["my homework", "the car", "the dishes"];
  let when = ["before work", "after school", "during dinner"];

  let randomnoun = Math.floor(Math.random() * noun.length);
  let randomverb = Math.floor(Math.random() * verb.length);
  let randomobject = Math.floor(Math.random() * object.length);
  let randomwhen = Math.floor(Math.random() * when.length);

  document.getElementById("excuse").innerHTML =
    noun[randomnoun] +
    " " +
    verb[randomverb] +
    " " +
    object[randomobject] +
    " " +
    when[randomwhen];
};
