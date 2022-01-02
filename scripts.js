let computerPlay = () => {
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0) return "Rock";
    else if (randomNum == 1) return "Paper";
    else return "Scissors";
}

let playRound = (playerSelection, computerSelection) => {
    let cs = computerSelection.toLowerCase();
    let ps = playerSelection.toLowerCase();

    const resultText = document.querySelector(".result-text");
    const computerScore = document.querySelector(".computer-score");
    const humanScore = document.querySelector(".human-score");
    

    console.log(cs, ps);

    if (cs == "rock") {
        if (ps == "paper") {
            resultText.textContent = `You Win! ${ps} beats ${cs}`;
            let human_score_updated = parseInt(humanScore.textContent) + 1;
            humanScore.textContent = human_score_updated;
        }
        else if (ps == "rock") {
            resultText.textContent = `You Tie! ${ps} beats ${cs}`;
        } 
        else if (ps == "scissors") {
            resultText.textContent = `You Win! ${ps} beats ${cs}`;
            let computer_score_updated = parseInt(computerScore.textContent) + 1;
            computerScore.textContent = computer_score_updated;
        }
        
    }
    else if (cs == "paper") {
        if (ps == "scissors") return [`You Win! ${ps} beats ${cs}`, "W"];
        else if (ps == "paper") return ["You Tie!", "T"];
        else if (ps == "rock") return [`You Lose! ${cs} beats ${ps}`, "L"];
    }
    else if (cs == "scissors") {
        if (ps == "rock") return [`You Win! ${ps} beats ${cs}`, "W"];
        else if (ps == "scissors") return ["You Tie!", "T"];
        else if (ps == "paper") return [`You Lose! ${cs} beats ${ps}`, "L"];
    }
}

let game = () => {
    let playerScore = 0;
    let computerScore = 0;

    const computerSelection = computerPlay();
    
    const buttons = document.querySelectorAll('.option');
    console.log(buttons);
    buttons.forEach((button) => {
        button.addEventListener("click", function() {
            playRound(button.textContent, computerSelection)
        });
    
    })

    let result = playRound(playerSelection, computerSelection);
    if (result[1] == "W") playerScore += 1;
    else if (result[1] == "L") computerScore += 1;
    console.log(result[0]);
    console.log(playerScore, computerScore);
    
    

}

game();

