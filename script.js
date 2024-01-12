let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector(".msg");
const userScoreP=document.querySelector("#user-score");
const compScoreP=document.querySelector("#comp-score");
const genCompChoice=() =>{
    //rock ,paper,scssior
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
};
const drawGame=()=>{
    // console.log("It's a Draw!");
    msg.innerText="It's a Draw!";
    msg.style.backgroundColor="#081b31";
    
    
    
}
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userScore++;
        userScoreP.innerText=userScore;
        // console.log("you win!");
        msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }else{
        compScore++;
       compScoreP.innerText=compScore;
        // console.log("you lose");
        msg.innerText=`You Lose! ${compChoice} beats your ${userChoice}`;
        msg.style.backgroundColor="red";
    }
};
const playGame=(userchoice)=>{
    // console.log("user chioce = ",userchoice);
    //Generate computer choice=>
    const compChoice=genCompChoice();
    // console.log("comp choice= ",compChoice);
    if(userchoice===compChoice){
        // draw game
        drawGame();
    }else{
        let userWin=true;
        if(userchoice==="rock"){
            //sccisor.paper
            userWin=compChoice==="paper"?false:true;
        }else if(userchoice==="paper"){
            //rock scissors
            userWin=compChoice==="scissors"?false:true;
        }else{
            //rock paper
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userchoice,compChoice);
    }
    
}
choices.forEach((choice) => {
    // console.log(choice);
   choice.addEventListener("click",()=>{
    const userChoice=choice.getAttribute("id")
    
    // console.log("choice was clicked",userChoice);
    playGame(userChoice);  
})

});