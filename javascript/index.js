function checkRefresh()
{
    if(!sessionStorage.getItem("rollDice"))//if rollDice is not saved then go inside this if
        sessionStorage.setItem("rollDice","roll");
    else
        rollTheDice();
}

function rollTheDice() 
{
  var randomNum1 = Math.ceil(Math.random() * 6);
  var randomNum2 = Math.ceil(Math.random() * 6);

  var img1Src = "dice" + randomNum1 + ".png";
  var img2Src = "dice" + randomNum2 + ".png";

  var imgTag = document.querySelector("img");
  imgTag.setAttribute("src", "images/" + img1Src);

  var imgTag2 = document.querySelectorAll("img")[1];
  imgTag2.setAttribute("src", "images/" + img2Src);

  var heading = document.querySelector("h1");

  if (randomNum1 > randomNum2) heading.innerHTML = "🚩Player 1 Wins";
  else if (randomNum1 < randomNum2) heading.innerHTML = "Player 2 Wins🚩";
  else heading.innerHTML = "Draw!";
}

document.body.onload=checkRefresh();