// user input
const numberOfRounds=prompt("Enter the number of rounds You will like to Play: ");
// the getComputerChoice function
function random (number){
    return Math.floor(Math.random()*number);
};
function getComputerChoice(){
    const choices=["rock","paper","scissors"];
    return choices[random(choices.length)];

};
function playRound(playerSelection,computerSelection){
    let correctPlayerSelection=playerSelection.toLowerCase();
    // check value being passed to the function
    if(correctPlayerSelection==="paper"|| correctPlayerSelection==="scissors"||correctPlayerSelection==="rock"){
    
        //computer wins
    if(correctPlayerSelection==="rock" && computerSelection==="paper"){
        return "You lose! Paper beats Rock !";
    }
    else if(correctPlayerSelection==="paper"&&computerSelection==="scissors"){
        return "You lose! scissors cuts paper";
    }
    else if(correctPlayerSelection==="scissors" &&computerSelection==="rock"){
        return "You lose! rock smashes scissors"
    }

    //ties

    else if(correctPlayerSelection===computerSelection){
        return "Tie!";
    }

    // player wins
    else if(correctPlayerSelection==="paper" && computerSelection==="rock"){
        return "You win! Paper beats Rock !";
    }
    else if(correctPlayerSelection==="scissors"&&computerSelection==="paperr"){
        return "You win! scissors cuts paper";
    }
    else if(correctPlayerSelection==="rock" && computerSelection==="scissors"){
        return "You win! rock smashes scissors"
    }}
   
    else{
        return "Check your Input";
    }
}
// game function
function game (){
    let userChoice;
    let result;
    let userCount=0;
    let computerCount=0;
    for (let i=0; i<numberOfRounds;i++){
userChoice=prompt("Enter either rock,paper or scissors");
result= playRound(userChoice,getComputerChoice());
if(result.includes("You win!")){
userCount+=1;
}
else if(result.includes("You lose!")){computerCount+=1}
alert(`${result}`);
    }
    if(userCount>computerCount){
        alert(`you won `);
    }
    else if (computerCount>userCount){
        alert('you lost');
    }
    else{
        alert('It ended in a tie');
    }
}
// call game function
game();
