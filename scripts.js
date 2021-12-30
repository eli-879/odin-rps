let computerPlay = () => {
    let randomNum = Math.floor(Math.random() * 3);

    if (randomNum == 0) return "Rock";
    else if (randomNum == 1) return "Paper";
    else return "Scissors";
}

let playRound = (playerSelection, computerSelection) => {
    let cs = computerSelection.toLowerCase();
    let ps = playerSelection.toLowerCase();

    if (cs == "rock") {
        if (ps == "paper") return [`You Win! ${ps} beats ${cs}`, "W"];
        else if (ps == "rock") return ["You Tie!", "T"];
        else if (ps == "scissors") return [`You Lose! ${cs} beats ${ps}`, "L"];
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

    for (let i = 0; i < 5; i++) {

        const playerSelection = prompt("Enter your choice");
        const computerSelection = computerPlay();

        let result = playRound(playerSelection, computerSelection);
        if (result[1] == "W") playerScore += 1;
        else if (result[1] == "L") computerScore += 1;

        console.log(result[0]);
        console.log(playerScore, computerScore);
    }

}

game();

