// dom values
// all the html elements we will be needing
const reset =document.querySelector("#reset");
const overlay =document.querySelector(".overlay");
const modal =document.querySelector(".modal");
const modalTitle=document.querySelector("#modalTitle");
const rock=document.querySelector('#rock');
const scissors=document.querySelector("#scissors");
const paper= document.querySelector("#paper");
const userScore= document.querySelector('#userScore');
const computerScore =document.querySelector("#computerScore");
const uiResult =document.querySelector('.choice');
const computerSelect =document.querySelector("#computerSelect");
const userSelect =document .querySelector("#userSelect");
// the paths are relative to my computer so please update if cloned.
// to lazy to do it myself.
const imagePath=["/Javascript/projects/rock-paper-scissors/rock.svg","/Javascript/projects/rock-paper-scissors/paper.svg","/Javascript/projects/rock-paper-scissors/scissors.svg"];
// initalized values
// to set things in order
let computerChoices="";
let winner="";
let round=0;
let result="";
let userCount=0;
let computerCount=0;

// random function
// like why doesn't javascript have an inbuilt random function like python.
function random (number){
    return Math.floor(Math.random()*number);
};
// the getComputerChoice function
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
    else if(correctPlayerSelection==="scissors"&&computerSelection==="paper"){
        winner='player';
        return " Scissors cuts paper";
    }
    else if(correctPlayerSelection==="rock" && computerSelection==="scissors"){
        winner='player';
        return "Rock smashes scissors"
    }}
   
    else{
        winner=''; 
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


// image changer functions
// to see what you picked.
function setImageUser(event){
    // accepts events inner child as an argument and set the source 
   
   if((event.target.id==="rock")||( event.target.parentElement.id==="rock")) {
    userSelect.setAttribute('src',imagePath[0]);
   }
   else if((event.target.id==='paper')||(event.target.parentElement.id==="paper")){
    userSelect.setAttribute('src',imagePath[1]);
   }
   else if((event.target.id==='scissors') || (event.target.parentElement.id==="scissors")){
    userSelect.setAttribute('src',imagePath[2]);
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

// game function
// we going to be using it later, so lets declare it.
function game(event){
    console.log(event.target.parentElement.id);
     if((userCount!==5)||(computerCount!==5)){
    if((event.target.id==="rock")||( event.target.parentElement.id==="rock")){
        result=playRound('rock');
        setImageUser(event);
      
        setTimeout(setImageComputer,500);
       
        setTimeout(setUiResult,1000);
    
    }
    else if((event.target.id==='paper')||(event.target.parentElement.id==="paper")){
        result=playRound('paper');
        setImageUser(event);
      
        setTimeout(setImageComputer,500);
       
        setTimeout(setUiResult,1000);
    }
    else if((event.target.id==='scissors') || (event.target.parentElement.id==="scissors")){
        result=playRound('scissors');
        setImageUser(event);
        
        setTimeout(setImageComputer,500);
       
        setTimeout(setUiResult,1000);
    }
    
    round+=1;
      if(winner==="player"){
        userCount+=1;
        userScore.textContent=userCount;
        }
        else if(winner==='computer'){
            computerCount+=1;
            computerScore.textContent=computerCount;
        }
    
        if((userCount===5)||(computerCount===5)){
 setTimeout(displayModal(),3000);
        
    }
    
}
}
//  to run game function
// watch for them clicks
    rock.addEventListener('click',game);
    scissors.addEventListener('click',game);
    paper.addEventListener('click',game);

// resetGame function
// let the game be nice and tidy when someone wins
function resetGame (){
    round=0;
    uiResult.textContent="Choose One!";
    computerScore.textContent=0;
    userScore.textContent=0;
    computerCount=0;
    userCount=0;
    computerSelect.setAttribute('src','/Javascript/projects/rock-paper-scissors/qmark.svg');
    userSelect.setAttribute('src','/Javascript/projects/rock-paper-scissors/qmark.svg');
    overlay.classList.remove('active');
    modal.classList.remove('active');
    overlay.classList.add('inactive');
    modal.classList.add('inactive');
}


reset.addEventListener('click',resetGame);