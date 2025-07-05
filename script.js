const winScore = 5;
let humanScore = 0;
let computerScore = 0;

const playerSelection = document.querySelectorAll(".option");
playerSelection.forEach((button) =>{
    button.addEventListener("click", () =>{
        playRound(button.id, getComputerChoice());
    });
});

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

function roundWinner(humanChoice, computerChoice){
    if(humanChoice == computerChoice){
        return -1;
    }
    else if(humanChoice == "rock" && computerChoice == "scissors"){
        return 1;
    }
    else if(humanChoice == "paper" && computerChoice == "rock"){
        return 1;
    }
    else if(humanChoice == "scissors" && computerChoice == "paper"){
        return 1;
    } else{
        return 0;
    }
}

function createByChildID(parentID, childID, ele){
    const parent = document.querySelector(parentID);
    let child = parent.querySelector(childID);

    if(!child){
        child = document.createElement(ele);
        child.id = childID.slice(1);
    }

    return child
}

function playRound(humanChoice, computerChoice){
    const win = roundWinner(humanChoice, computerChoice);
    
    let roundStart = createByChildID("#results", "#roundStart", "div");
    roundStart.textContent = `You picked ${humanChoice}. Computer picked ${computerChoice}.`;

    let roundResult = createByChildID("#results", "#roundResult", "div");

    if(win > 0){
        humanScore += 1;
        roundResult.textContent = `You win this round! ${humanChoice} beats ${computerChoice}.`;
    } else if( win < 0){
        roundResult.textContent = `It's a tie betwen ${humanChoice} and ${computerChoice}!`;
    } else{
        computerScore += 1;
        roundResult.textContent = `You lost this round... ${computerChoice} beats ${humanChoice}.`;
    }   

    results.appendChild(roundStart);
    results.appendChild(roundResult);

    updateScore();
}

function playAgain(){
    const again = document.querySelector("#again");
    const againBtn = document.createElement("button");

    againBtn.textContent = "Play Again?";
    againBtn.id = "againBtn";

    againBtn.style.borderStyle = "none";
    againBtn.style.borderRadius = "30px";
    againBtn.style.fontSize = "20px";
    againBtn.style.padding = "10px 10px";
    againBtn.style.backgroundColor = "rgb(210, 250, 230)";
    againBtn.style.fontWeight = "bold";
    againBtn.style.height = "80px";
    againBtn.style.width = "150px";

    againBtn.addEventListener("mouseenter", () =>{
        againBtn.style.backgroundColor = "rgb(159, 245, 187)";
    });

    againBtn.addEventListener("mouseleave", () =>{
        againBtn.style.backgroundColor = "rgb(210, 250, 230)";
    });

    againBtn.addEventListener("click", function(e){
        const results = document.querySelector("#results");
        results.replaceChildren();

        playerSelection.forEach((button) =>{
            button.disabled = false;
        });

        const human = document.querySelector("#humanScore");
        const computer = document.querySelector("#computerScore");

        humanScore = 0;
        computerScore = 0;

        computer.textContent = `Computer: ${computerScore}`
        human.textContent = `Human: ${humanScore}`

        e.target.remove();
    });

    again.appendChild(againBtn);
    
}

function endGame(){
    let outcome = "";

    if(humanScore == computerScore){
        outcome = "The game is a tie!";
    } else if(humanScore > computerScore){
        outcome = "You won the game :)";
    } else{
        outcome = "You lost the game :(";
    }

    playerSelection.forEach((input) =>{
        input.disabled = true;
    });

    playAgain();

    return outcome;
}

function updateScore(){
    const human = document.querySelector("#humanScore");
    human.textContent = `Human: ${humanScore}`;

    const computer = document.querySelector("#computerScore");
    computer.textContent = `Computer: ${computerScore}`;

    if(humanScore == winScore || computerScore == winScore){
        const results = document.querySelector("#results");
        const outcome = endGame();

        const gameResult = document.createElement("div");
        gameResult.textContent = outcome;
        gameResult.id = "gameResult";
        gameResult.style.fontSize = "25px";
        results.appendChild(gameResult)
    }
}