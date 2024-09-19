function getComputerChoice()
{
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random()*3);
    return choices[randomIndex];
}
function getHumanChoice()
{
    let human = "";
    while(true)
    {
        human = prompt("What is your attack(rock, paper or scissors)");
        human = human.toLowerCase();
        if(human == "rock" ||human == "paper" ||human == "scissors")
        {
            return human;
        }
        else
        {
            console.log("Invalid Option, try again");
        }
    }
}




function playGame()
{
    function playRound(human, computer)
    {
        if(human == "rock")
        {
            if(computer == "paper")
            {
                console.log("You lose! Paper beats Rock");
                computerScore++;
            }
            else if(computer == "rock")
            {
                console.log("Draw!");
            }
            else if(computer == "scissors")
            {
                console.log("You win!, rock beats scissors");
                playerScore++;
            }
        }
        else if(human == "paper")
        {
            if(computer == "paper")
            {
                console.log("Draw!");
            }
            else if(computer == "rock")
            {
                
                console.log("You win! Paper beats Rock");
                playerScore++;
            }
            else if(computer == "scissors")
            {
                console.log("You lose!, scissors beats paper");
                computerScore++;
            }
        }
        else if(human == "scissors")
        {
            if(computer == "paper")
            {
                console.log("You win!, scissors beats paper");
                playerScore++;
            }
            else if(computer == "rock")
            {
                console.log("You lose!, rock beats scissors");
                computerScore++;

            }
            else if(computer == "scissors")
            {
                console.log("Draw!");
            }
        }
        return;
    }
var playerScore = 0;
var computerScore = 0;
for(let i = 0;i<5;i++)
    {
        playRound(getHumanChoice(),getComputerChoice());
        console.log("Player Score: "+playerScore);
        console.log("Computer Score: "+computerScore);
    }
}

playGame();

