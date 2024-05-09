const choices = ['rock','paper','scissors'];
const dispresult = document.getElementById('result');
const pscore = document.getElementById('score');
const move = document.getElementById('move');
let score = 0

function playGame(playermove)
{
    const computerMove = choices[Math.floor(Math.random()*3)];
    let result="";
    
    if(playermove === computerMove)
    {
        result = "It's a tie!";
    }
    else
    {
        switch(playermove){
            case 'rock':
                result = (computerMove === 'scissors') ? "You Win!" : "You Lose";
                break;
            case 'paper':
                result = (computerMove === 'rock') ? "You Win!" : "You Lose";
                break;
            case 'scissors':
                result = (computerMove === 'paper') ? "You Win!" : "You Lose";
                break;
        }
    }

    move.innerHTML = `You: <span style="color: green;text-transform: uppercase;">${playermove}</span>, Computer: <span style="color: red;text-transform: uppercase;">${computerMove}</span>`;
    dispresult.innerHTML = result;

    dispresult.classList.remove("greenText", "redText");

    switch(result){
        case "You Win!":
            dispresult.classList.add("greenText");
            score++;
            pscore.innerHTML = `Score: <span style="color: blue;">${score}</span>`;
            break;
        case "You Lose":
            dispresult.classList.add("redText");
            break;
    }
}