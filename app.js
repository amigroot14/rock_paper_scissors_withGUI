
const computerChoices=["rock","paper","scissors"]
let userScore=0
let computerScore=0
let gameState=1

const yesBtn=document.querySelector('.yes-btn')
const choices=document.querySelectorAll('.choice')
const userScoreEl=document.querySelector('#user-score')
const computerScoreEl=document.querySelector('#computer-score')
const messageEl=document.getElementById('message')
const scoreContainer=document.querySelector('.score-container')

yesBtn.addEventListener('click',()=>{
    scoreContainer.classList.add('show')
    showMessage("Let's Start")
    userScore=0
    computerScore=0
    playGame()
})




choices.forEach((choice)=>{
choice.addEventListener('click',function playGame(){
let userSelection=choice.getAttribute('id')
let computerSelection=computerPlays()
if(userScore<5&&computerScore<5){


    let score=gameLogic(userSelection,computerSelection,0,0)
    userScore+=score[0]
    computerScore+=score[1]
    if(userScore===5){
        showMessage("You win! Now go make tea",'success')
        userScoreEl.textContent=userScore
        setTimeout(() => {
            reset()
        }, 3000);
    }
    else if(computerScore===5){
        showMessage("You lose! Maybe find something else to do?",'danger')
        computerScoreEl.textContent=computerScore
        setTimeout(() => {
            reset()
        }, 3000);
    }
    else{
    userScoreEl.textContent=userScore
    computerScoreEl.textContent=computerScore
    }


}

})
})



function computerPlays(){
    randomNum=Math.floor(Math.random()*3)
    return computerChoices[randomNum]
}

function gameLogic(userSelection,computerSelection,userScore,computerScore){
    if(userSelection===computerSelection){
        showMessage(`Computer chooses ${computerSelection}. It's a tie!`)
    }
    else if(computerSelection===computerChoices[0]&&userSelection===computerChoices[2]){
        showMessage(`Computer chooses ${computerSelection}. You lose..`,'danger')
        computerScore+=1

    }
    else if(computerSelection===computerChoices[1]&&userSelection===computerChoices[0]){
        showMessage(`Computer chooses ${computerSelection}. You lose.. Give it another try!`,'danger')
        computerScore+=1

    }
    else if(computerSelection===computerChoices[2]&&userSelection===computerChoices[1]){
        showMessage(`Computer chooses ${computerSelection}. You lose.. You'll get 'em next time!`,'danger')
        computerScore+=1

    }
    else if(computerSelection===computerChoices[1]&&userSelection===computerChoices[2]){
        showMessage(`Computer chooses ${computerSelection}. You win! You're quite good at this!`,'success')
        userScore++

    }
    else if(computerSelection===computerChoices[0]&&userSelection===computerChoices[1]){
        showMessage(`Computer chooses ${computerSelection}. You win! Beat 'em!!`,'success')
        userScore++

    }
    else if(computerSelection===computerChoices[2]&&userSelection===computerChoices[0]){
        showMessage(`Computer chooses ${computerSelection}. You win! Not bad!`,'success')
        userScore++

    }
    return [userScore,computerScore]
    
}

function showMessage(message,status){
    messageEl.textContent=message
    if(messageEl.classList.contains('danger')){
        messageEl.classList.remove('danger')
        messageEl.classList.add(status)
    }
    else{
        messageEl.classList.remove('success')
        messageEl.classList.add(status)
    }
}

function reset(){
    scoreContainer.classList.remove('show')
    yesBtn.textContent="Play again"
    userScoreEl.textContent=0
    computerScoreEl.textContent=0
    showMessage("Let's Start")
}