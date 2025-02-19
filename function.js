
let rock = false;
let paper = false;
let scissors = false;

let button = document.getElementById("challenge");
let result = document.getElementById("result");

let rocker = document.getElementById("rock");
let scis = document.getElementById("scissors");
let pap = document.getElementById("paper");


function Rockpicked() {
    rock = true;
    paper = false;
    scissors = false;
    rocker.style.backgroundColor = "green";
    rocker.style.color = "white";
    scis.style.backgroundColor = "red";
    scis.style.color = "white";
    pap.style.backgroundColor = "red";
    pap.style.color = "white";
}

function paperpicked() {
    rock = false;
    paper = true;
    scissors = false;
    rocker.style.backgroundColor = "red";
    rocker.style.color = "white";
    scis.style.backgroundColor = "red";
    scis.style.color = "white";
    pap.style.backgroundColor = "green";
    pap.style.color = "white";
}

function scissorspicked() {
    rock = false;
    paper = false;
    scissors = true;
    rocker.style.backgroundColor = "red";
    rocker.style.color = "white";
    scis.style.backgroundColor = "green";
    scis.style.color = "white";
    pap.style.backgroundColor = "red";
    pap.style.color = "white";
}

let list = ["Paper", "Rock", "Scissors"];
let random = Math.floor(Math.random()*3);
let picked = list[random];


let myfunction = function() {
    setTimeout(function()  {
        result.innerHTML = "Now that you have won..."
    }, 1200);

    setTimeout(function()  {
        result.innerHTML = "Are you smart because you are him"
    }, 3200);

    setTimeout(function()  {
        result.innerHTML = "or are you him because you are smart...."
    }, 5200);
    
    setTimeout(function()  {
        result.innerHTML = "You should think b4 you act..."
    }, 7200);

    setTimeout(function()  {
        result.innerHTML = "I, the person you call the bot..."
    }, 9200);

    setTimeout(function()  {
        result.innerHTML = "Will demolish you..."
    }, 11200);

    setTimeout(function()  {
        result.innerHTML = "I choose..."

        setTimeout(function()  {
            if (picked =="Rock") {
                result.innerHTML =  "Bot picked " + "Paper" + " and you Lost TERRIBLEY";
                result.style.backgroundColor = "red";
                result.style.color = "White";
            } else if (picked =="Paper") {
                result.innerHTML =  "Bot picked " + "Scissors" + " and you Lost TERRIBLEY";
                result.style.backgroundColor = "red";
                result.style.color = "White";
            } else if (picked =="Scissors") {
                result.innerHTML =  "Bot picked " + "Rock" + " and you Lost TERRIBLEY";
                result.style.backgroundColor = "red";
                result.style.color = "White";
            } 
        }, 1200);
    }, 13200);

}


function clicked() {
    

    if(rock == true) {
       if (picked == "Rock")  {
        result.innerHTML =  "Bot picked " + picked + " and you tied";
        result.style.backgroundColor = "Blue";
        result.style.color = "White";
        
       } else if (picked == "Paper")  {
        result.innerHTML ="Bot picked " + picked + " and you lost";
        result.style.backgroundColor = "red";
        result.style.color = "White";

       }  else if (picked == "Scissors")  {
        result.innerHTML ="Bot picked " + picked + " and you Won";
        result.style.backgroundColor = "green";
        result.style.color = "White";
        myfunction();

       }
    }

     else if(paper == true) {
        if (picked == "Rock")  {
         result.innerHTML =  "Bot picked " + picked + " and you won";
         result.style.backgroundColor = "green";
         result.style.color = "White";
         myfunction();
         
        } else if (picked == "Paper")  {
         result.innerHTML ="Bot picked " + picked + " and you tied";
         result.style.backgroundColor = "blue";
         result.style.color = "White";
 
        }  else if (picked == "Scissors")  {
         result.innerHTML ="Bot picked " + picked + " and you lost";
         result.style.backgroundColor = "red";
         result.style.color = "White";
        }
     }

     else if(scissors == true) {
        if (picked == "Rock")  {
         result.innerHTML =  "Bot picked " + picked + " and you lost";
         result.style.backgroundColor = "red";
         result.style.color = "White";
         
        } else if (picked == "Paper")  {
         result.innerHTML ="Bot picked " + picked + " and you won";
         result.style.backgroundColor = "green";
         result.style.color = "White";
         myfunction();
 
        }  else if (picked == "Scissors")  {
         result.innerHTML ="Bot picked " + picked + " and you tied";
         result.style.backgroundColor = "blue";
         result.style.color = "White";
        }
     }else {
        result.innerHTML =  "Please pick an option";
        result.style.backgroundColor = "red";
        result.style.color = "White";
        setTimeout(function() {

        result.innerHTML =  "Pick any option then press 'Challenge' to start the game";
        result.style.backgroundColor = "White";
        result.style.color = "Black";
        }, 1800);
     }

}

