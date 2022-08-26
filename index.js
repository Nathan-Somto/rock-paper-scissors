// dom values

const reset =document.querySelector("#reset");
const overlay =document.querySelector(".overlay");
const modal =document.querySelector(".modal");
const modalTitle=document.querySelector("#modalTitle");
const btn=document.querySelector('.buttons');
const userScore= document.querySelector('#userScore');
const computerScore =document.querySelector("#computerScore");
const uiResult =document.querySelector('.choice');
const computerSelect =document.querySelector("#computerSelect");
const userSelect =document .querySelector("#userSelect");
const imagePath=["/Javascript/projects/rock-paper-scissors/rock.svg","/Javascript/projects/rock-paper-scissors/paper.svg","/Javascript/projects/rock-paper-scissors/scissors.svg"];
let computerChoices="";
let winner="";
// initalized values
let round=0;
let result="";
let userCount=0;
let computerCount=0;
const numberOfRounds=5;
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
    computerChoices=computerSelection;
    // check value being passed to the function
    if(correctPlayerSelection==="paper"|| correctPlayerSelection==="scissors"||correctPlayerSelection==="rock"){
    
        //computer wins
    if(correctPlayerSelection==="rock" && computerSelection==="paper"){
        winner="computer";
        return "Paper beats Rock !";
    }
    else if(correctPlayerSelection==="paper"&&computerSelection==="scissors"){
         winner= "computer";
        return "Scissors cuts paper";
    }
    else if(correctPlayerSelection==="scissors" &&computerSelection==="rock"){
        winner="computer";
        return "Rock smashes scissors"
    }

    //ties

    else if(correctPlayerSelection===computerSelection){
        return "Tie!";
    }

    // player wins
    else if(correctPlayerSelection==="paper" && computerSelection==="rock"){
        winner ='player';
        return "Paper beats Rock !";
    }
    else if(correctPlayerSelection==="scissors"&&computerSelection==="paperr"){
        winner='player';
        return " Scissors cuts paper";
    }
    else if(correctPlayerSelection==="rock" && computerSelection==="scissors"){
        winner='player';
        return "Rock smashes scissors"
    }}
   
    else{
        return "Check your Input";
    }
}
// displayModal function
function displayModal(){
    if(userCount>computerCount){
        modalTitle.textContent='you won! :)';
    }
    else if (computerCount>userCount){
        modalTitle.textContent='you lost! :(';
    }
   
    overlay.classList.remove('inactive');
    modal.classList.remove('inactive');
    overlay.classList.add('active');
    modal.classList.add('active');
}
// call game function
// image change for when button is clicked
function setImageUser(event){
    // accepts events inner child as an argument and set the source 
   /*  event.target. */
   if(event.target.id==="rock"){
    userSelect.setAttribute('src',imagePath[0]);
   }
   else if(event.target.id==='scissors'){
    userSelect.setAttribute('src',imagePath[2]);
   }
   else if(event.target.id=="paper"){
    userSelect.setAttribute('src',imagePath[1]);
}


   
}
  function setImageComputer(){
     if(computerChoices==='rock'){
    computerSelect.setAttribute('src',imagePath[0]);
}
else if(computerChoices==='paper'){
    computerSelect.setAttribute('src',imagePath[1]);
   
}
else if(computerChoices==='scissors'){

    computerSelect.setAttribute('src',imagePath[2]);
} 
  }
   
  function setUiResult(){
    uiResult.textContent=result;
  }


function game(event){
    console.log(event);
     if(round!==numberOfRounds){
    if(event.target.id==="rock"){
        result=playRound('rock');
        setImageUser(event);
      
        setTimeout(setImageComputer,1000);
       
        setTimeout(setUiResult,2000);
    
    }
    else if(event.target.id==='paper'){
        result=playRound('paper');
        setImageUser(event);
      
        setTimeout(setImageComputer,1000);
       
        setTimeout(setUiResult,2000);
    }
    else if(event.target.id==='scissors'){
        result=playRound('scissors');
        setImageUser(event);
        
        setTimeout(setImageComputer,1000);
       
        setTimeout(setUiResult,2000);
    }
    console.log(result);
    round+=1;
      if(winner==="player"){
        userCount+=1;
        userScore.textContent=userCount;
        }
        else if(winner==='computer'){
            computerCount+=1;
            computerScore.textContent=computerCount;
        }
    
    if(round===numberOfRounds){
 setTimeout(displayModal(),5000);
        
    }
    
}
}
//  to run game function
    btn.addEventListener('click',game);

// resetGame function
function resetGame (){
    round=0;
    uiResult.textContent="Choose One!";
    computerScore.textContent=0;
    userScore.textContent=0;
    computerCount=0;
    userCount=0;
    computerSelect.setAttribute('src','#');
    userSelect.setAttribute('src','#');
    overlay.classList.remove('active');
    modal.classList.remove('active');
    overlay.classList.add('inactive');
    modal.classList.add('inactive');
}
// image setter funtion

reset.addEventListener('click',resetGame);