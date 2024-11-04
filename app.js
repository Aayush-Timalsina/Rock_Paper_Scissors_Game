let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll('.choice');
const msg = document.querySelector("#msg");


const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");
 

const geneCompChoice = () => {
    const option = ["rock", "paper", "stone"];
    const randIdx = Math.floor(Math.random()*3);
    return option[randIdx];
};

const drawGame = () => {
    console.log("Game was Draw");
    msg.innerText = "Game was draw. Play Again??";
    msg.style.backgroundColor = "#004346";
    
};

const showWinner = (userWin, userChoice, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You win. Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        
    } else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lose.${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
};

const playGame = (userChoice) =>{
    //Generate Computer Choice -> modular
    const compChoice = geneCompChoice();
    
    if(userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if(userChoice === "rock") {
            userWin = compChoice === "paper" ? false : true;
        } else if(userChoice === "paper") {
            userWin = compChoice === "scissors" ? false : true;
        } else {
            //rock, paper
           userWin = compChoice === "rock" ? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }

};

choices.forEach((choice) => {
    choice.addEventListener("click", () =>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
     });
});