let num1=Math.round((Math.random()*5+1));
let num2=Math.round((Math.random()*5+1));

let randomDice1="./images/dice"+num1+".png";
let randomDice2="./images/dice"+num2+".png";

if(num1>num2)
{
  document.querySelector(".img1").setAttribute("src",randomDice1);
  document.querySelector(".img2").setAttribute("src",randomDice2);

  document.querySelector("h2").innerHTML="🚩 Player-1 won";
}
else if(num2>num1)
{
  document.querySelector(".img1").setAttribute("src",randomDice1);
  document.querySelector(".img2").setAttribute("src",randomDice2);
  document.querySelector("h2").innerHTML=" Player-2 won 🚩";
}
else{

  document.querySelector(".img1").setAttribute("src",randomDice1);
  document.querySelector(".img2").setAttribute("src",randomDice2);  
  document.querySelector("h2").innerHTML="Nobody won";
}
