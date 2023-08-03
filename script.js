const prompt =require("prompt-sync")();
 
let draw=0;
let win=0;
let loss=0;

console.log("Let's Play Rock Paper Scissor ");
while(true){

let plChoice = prompt("Enter your choice or type Q to quite");

optnElement =["Rock","Paper","Scissor"];
const ranChoice = Math.round(Math.random() * 2);

const comChoice =optnElement[ranChoice];

if(plChoice!=="Rock" && plChoice!=="Paper" && plChoice!=="Scissor"){
    console.log("Enter the valid option");
    continue;
}
if(plChoice==="Q"){
    break;
}
if(plChoice===comChoice)
{
    console.log("It's Draw");
    draw++;
    continue;
}
else if(
(plChoice==="Paper" && comChoice==="Rock")||
(plChoice==="Rock" && comChoice==="Scissor")||
(plChoice==="Scissor" && comChoice==="Paper")){
    console.log("You Won!!");
    win++;
    continue;
}
else{
    console.log("You lost!!");
    loss++;
    continue;
}

}
console.log(draw,win,loss);