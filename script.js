humanScore = 0;
computerScore = 0;

function getComputerChoice(){
    let choice = Math.random() * 3;
    let decision = "";

    if(choice <= 1){
        decision = "rock";
    } else if(choice > 1 && choice <= 2){
        decision = "paper";
    }
    else{
        decision = "scissors";
    }
    
    return decision;
}

function getHumanChoice(){
    let choice = prompt("Rock, Paper, or Scissors? ");

    return choice.toLowerCase();
}

function playRound(humanChoice, computerChoice){
    let win = -1;

    console.log(`You picked ${humanChoice}. Computer picked ${computerChoice}.`)

    if(humanChoice == computerChoice){
        win = -1;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        win = 1;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        win = 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        win = 1;
    } else{
        win = 0;
    }

    if(win > 0){
        humanScore += 1;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
    } else if( win < 0){
        console.log(`It's a tie betwen ${humanChoice} and ${computerChoice}!`);
    } else{
        computerScore += 1;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
    }   
}

function playGame(){
    for(let i = 0; i < 5; i++){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();

        playRound(humanChoice, computerChoice);
    }

    console.log(`Human score: ${humanScore}. Computer score: ${computerScore}.`)

    if(humanScore == computerScore){
        console.log("The best of 5 is a tie!");
    } else if(humanScore > computerScore){
        console.log("You won the best of 5!");
    } else{
        console.log("You lost the best of 5!");
    }
}

playGame();


