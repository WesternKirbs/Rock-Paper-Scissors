
function getComputerChoice() {
    switch(Math.floor(Math.random() * 3)){
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissor";
    }

} 

let getHumanChoice = () => prompt("choice:");

function playRound(humanChoice , computerChoice) {
    let res = "";
    if(humanChoice == computerChoice){
        result.textContent = "Draw!";
        return;
    }
    else{
        switch(humanChoice){
            case "rock":
                res = (computerChoice.length == 5)?"Lose" : "Win";
                break;
            case "paper":
                res = (computerChoice.length == 4)?"Win" : "Lose";
                break;
            case "scissor":
                res = (computerChoice.length == 4)?"Lose" : "Win";
                break;
        }
    }
    console.log(`you choose ${humanChoice} computer choose ${computerChoice}`);
    if(res == "Win") humanScore++;
    else computerScore++;
    result.textContent = `You ${res}! ${(res == "Win")?humanChoice:computerChoice} beats ${(res == "Win")?computerChoice:humanChoice}`
    return;
}

function playGame() {
    
    for(let i = 0; i<5; i++) {
        const humanSelection = getHumanChoice().toLowerCase();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
}


//playGame();
humanScore = 0;
computerScore = 0;
const page = document.querySelector("div");
const btnR = document.createElement("button");
const btnP = document.createElement("button");
const btnS = document.createElement("button");
const result = document.createElement("div");
const score = document.createElement("div");
btnR.textContent = "rock";
btnP.textContent = "paper";
btnS.textContent = "scissor";
const btns = [btnR, btnP, btnS];
btns.forEach((button) => {
    button.addEventListener("click",(e) => {
        playRound(e.target.textContent, getComputerChoice());
        score.textContent = `your score : ${humanScore}  computer score : ${computerScore}`;
        if(humanScore >= 5 || computerScore >= 5) {
            if(humanScore == computerScore)
                console.log("Draw!");
            else
            console.log(`You ${(humanScore > computerScore)? "Win":"Lose"}!`);
            console.log(`score ${humanScore} : ${computerScore}`);
        }
        page.appendChild(result);
        page.append(score);  
    })
    page.appendChild(button);
})




