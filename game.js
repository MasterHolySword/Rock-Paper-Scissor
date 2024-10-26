function getComputerChoice(){
        let choice = Math.floor((Math.random() * 3) + 1);
        if(choice == 1){
            return "rock";
        }else if(choice == 2){
            return "paper";
        }else if(choice == 3){
            return "scissors";
        }
}

function getHumanChoice(rock,paper,scissors){
        return new Promise((resolve) => {
        rock.addEventListener("click", () => resolve("rock"),{once: true});
        paper.addEventListener("click", () => resolve("paper"),{once: true});
        scissors.addEventListener("click", () => resolve("scissors"),{once: true});
        });
}

function playRound(humanChoice, computerChoice){
    if(humanChoice == "rock" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "scissors"){
        return("computer");
    }else if(humanChoice == "rock" && computerChoice == "scissors" || humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper"){
        return("human");
    }else if(humanChoice == "rock" && computerChoice == "rock" || humanChoice == "paper" && computerChoice == "paper" || humanChoice == "scissors" && computerChoice == "scissors"){
        return("tie");
    }
}

async function playGame(rock,paper,scissors, newTitle, scores) { 
    let humanScore = 0;
    let computerScore = 0;
    newTitle.textContent = "Pick an Option";
    scores.textContent = "Computer - 0 : 0 - Human";
    for(let i=0; i<5; i++){
        let hChoice = await getHumanChoice(rock,paper,scissors);
        let cChoice = getComputerChoice();
        let result = playRound(hChoice, cChoice);
        
        if(result == "computer"){
            newTitle.textContent = "POINT - COMPUTER";
            computerScore++;
            scores.textContent = "Computer - "+computerScore+" : "+humanScore+" - Human";
        }else if(result == "human"){
            newTitle.textContent = "POINT - HUMAN";
            humanScore++;
            scores.textContent = "Computer - "+computerScore+" : "+humanScore+" - Human";
        }else if(result == "tie"){
            newTitle.textContent = "TIE - NO POINT";
            scores.textContent = "Computer - "+computerScore+" : "+humanScore+" - Human";
        }
    }
    if(humanScore>computerScore){
        newTitle.textContent = "YOU WIN";
    }
    if(humanScore<computerScore){
        newTitle.textContent = "You Lose!";
    }
    if(humanScore == computerScore){
        newTitle.textContent = "TIE!";
    }
}

let cont = document.querySelector(".container");
let title = document.getElementById("title");
let btn = document.querySelector(".play");
let footer = document.querySelector(".footer");
let war = document.querySelector(".warning");

btn.addEventListener("mouseover", () =>{
    btn.style.backgroundColor = "white";
    btn.style.color = "lightgreen";
});
btn.addEventListener("mouseout", () =>{
    btn.style.backgroundColor = "lightgreen";
    btn.style.color = "black";
});

btn.addEventListener("click", () => {
    cont.removeChild(title);
    cont.removeChild(btn);
    cont.removeChild(footer);
    cont.removeChild(war);

    let playAgain = document.createElement("button");
    let newTitle = document.createElement("h1");
    let scores = document.createElement("p");
    let imgCont = document.createElement("div");
    let rock = document.createElement("IMG");
    let paper = document.createElement("IMG");
    let scissors = document.createElement("IMG");

    rock.setAttribute("src", "Rock.png");
    rock.style.height = "100px";

    paper.setAttribute("src", "paper.png");
    paper.style.height = "100px";

    scissors.setAttribute("src", "Scissors.png");
    scissors.style.height = "100px";

    newTitle.textContent = "Pick an Option";
    scores.textContent = "Computer - 0 : 0 - Human";
    scores.style.fontSize = "40px";
    
    imgCont.style.display = "flex";
    imgCont.style.gap = "150px";
    imgCont.style.margin = "30px";

    playAgain.textContent = "Play Again";
    playAgain.style.backgroundColor = "lightGreen";
    playAgain.style.height = "30px";
    playAgain.style.width = "90px";
    playAgain.style.display = "flex";
    playAgain.style.alignItems = "center";
    playAgain.style.justifyContent = "center";
    playAgain.style.borderRadius = "6px";
    playAgain.style.color = "black";

    playAgain.addEventListener("mouseover", () =>{
        playAgain.style.backgroundColor = "white";
        playAgain.style.color = "lightgreen";
    });
    playAgain.addEventListener("mouseout", () =>{
        playAgain.style.backgroundColor = "lightgreen";
        playAgain.style.color = "black";
    });
    
    cont.append(newTitle,scores);
    imgCont.append(rock, paper, scissors);
    cont.append(imgCont, playAgain);

    playGame(rock,paper,scissors, newTitle, scores);
    
    function repeat() {
   playAgain.addEventListener("click", () => {
        playGame(rock, paper, scissors, newTitle, scores);
    });
  };  
  repeat(); 
});





