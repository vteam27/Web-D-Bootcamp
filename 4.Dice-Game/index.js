var randomNumber1= Math.floor((6*Math.random()))+1;
console.log(randomNumber1);
var sourceimg="images/dice"+randomNumber1+".png";
document.querySelector(".img1").src= sourceimg ;
var randomNumber2= Math.floor((6*Math.random()))+1;
console.log(randomNumber2);
var sourceimg="images/dice"+randomNumber2+".png";
document.querySelector(".img2").src= sourceimg;
if(randomNumber1>randomNumber2)
{
  document.querySelector(".big-heading").innerHTML="Player 1 Wins";
}
else if(randomNumber1<randomNumber2)
{
  document.querySelector(".big-heading").innerHTML="Player 2 Wins";
}
else{
  document.querySelector(".big-heading").innerHTML="Draw!";
}
