// the getComputerChoice function
function random (number){
    return Math.floor(Math.random()*number);
}
function getComputerChoice(){
    const choices=["rock","paper","scissors"];
    return choices[random(choices.length)];

}