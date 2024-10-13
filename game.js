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

function getHumanChoice(){
    while(true){
        let choice = prompt("pick- rock, paper, scissors");
        choice = choice.toLowerCase();
        if(choice == "rock" ||choice == "paper" ||choice == "scissors"){
            return choice;
        }else{
            console.log("Error please check your spelling");
        }
    }
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




function playGame() { 
    
    for(let i=0; i<5; i++){
        let hChoice = getHumanChoice();
        let cChoice = getComputerChoice();
        let result = playRound(hChoice, cChoice);
       
        if(result == "computer"){
            console.log("POINT - COMPUTER");
            computerScore++;
        }else if(result == "human"){
            console.log("POINT - Human");
            humanScore++;
        }else if(result == "tie"){
            console.log("TIE - NO POINT");
        }
    }
    if(humanScore>computerScore){
        console.log("YOU WIN");
    }
    if(humanScore<computerScore){
        console.log("You Lose!");
    }
    if(humanScore == computerScore){
        console.log("TIE!");
    }
}
var humanScore = 0;
var computerScore = 0;
playGame();



