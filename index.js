// user input
const numberOfRounds=5;
//const playerName=prompt("Enter player name : ");
const uiResult=document.querySelector('.choice');
// the getComputerChoice function
function random (number){
    return Math.floor(Math.random()*number);
};
function getComputerChoice(){
    const choices=["rock","paper","scissors"];
    return choices[random(choices.length)];

};
function playRound(playerSelection,computerSelection=getComputerChoice()){
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
// call game function
// image change for when button is clicked
const btn=document.querySelector('.buttons');
let round=0;
let result="";
let userCount=0;
let computerCount=0;
function game(event){
     if(round!==numberOfRounds){
    if(event.target.id==="rock"){
        result=playRound('rock');
    
    }
    else if(event.target.id==='paper'){
        result=playRound('paper');
    }
    else if(event.target.id==='scissors'){
        result=playRound('scissors');
        
    }
    console.log(result);
    round+=1;
      if(result.includes("You win!")){
        userCount+=1;
        }
        else if(result.includes("You lose!")){
            computerCount+=1
        }
    
    if(round===numberOfRounds){
        if(userCount>computerCount){
            uiResult.textContent='you won! :)';
        }
        else if (computerCount>userCount){
            uiResult.textContent='you lost! :(';
        }
        else{
            uiResult.textContent='it ended in a tie! :|';
        }
    }
    
}

    
  
 
}
// create reset game function
    btn.addEventListener('click',game);

// modal handler
const reset =document.querySelector("#");