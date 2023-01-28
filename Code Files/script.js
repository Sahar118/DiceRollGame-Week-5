'use strict';
// Selecting element
const player0 = document.querySelector('.player-0-div');
const player1 = document.querySelector('.player-1-div')
const scorePlayer0 = document.querySelector('#score-player-0');
const scorePlayer1 = document.querySelector('#score-player-1');
const scoreCurrent0 = document.getElementById('score-current-player-0')
const scoreCurrent1 = document.getElementById('score-current-player-1')
const diceTop = document.querySelector('#dice-top');
const diceBottom = document.querySelector('#dice-bottom');
const newGameBtn = document.querySelector('#new-game');
const rollDiceBtn = document.querySelector('#roll-dice');
const holdBtn = document.querySelector('#hold');
const winner0=  document.querySelector('#winCount-0');
const winner1=  document.querySelector('#winCount-1');
const modal = document.getElementById("myModal");
const newGameBtn1 = document.getElementById("new-game-btn");
const startGameBtn = document.getElementById("letStart");
const turnOffSound = document.querySelector('.turn-off-sound')
const targetScore = document.getElementById('targetScore').valueAsNumber;


let POP_SOUND= new Audio('/audio/mixkit-bonus-earned-in-video-game-2058.wav');
POP_SOUND.volume = 0.1;
let cong_Sound = new Audio('/audio/TCD25PS-game-success (1).mp3');
cong_Sound.volume = 0.1;



// 
scorePlayer0.textContent=0;
scorePlayer1.textContent=0;
scoreCurrent0.textContent=0;
scoreCurrent1.textContent=0;

startGameBtn.onclick = function(){
    modal.style.display='none';
};

startGameBtn.addEventListener('click', function(e){
    targetScore = document.getElementById('targetScore').valueAsNumber;
});
let score, playerNum, currentScore1, playingStatus;
// 
const startNewGame = function (){
    score =[0,0];
    playerNum = 0;
    currentScore1 = 0;
    playingStatus = true;
    scorePlayer0.textContent=0;
    scorePlayer1.textContent=0;
    scoreCurrent0.textContent=0;
    scoreCurrent1.textContent=0;
    
    diceTop.classList.add('hidden');
    diceBottom.classList.add('hidden');
    player0.classList.add('player-active');
    player1.classList.remove('player-active');
    player0.classList.remove('winner');
    player1.classList.remove('winner');
    POP_SOUND.play();

}
startNewGame()
const switchPlayer = function(){
    document.getElementById(`score-current-player-${playerNum}`).textContent = 0;
    currentScore1=0;
    playerNum = playerNum === 0 ? 1 : 0; 
    player0.classList.toggle('player-active');
    player1.classList.toggle('player-active');
    cong_Sound.play();
    POP_SOUND.play();
    
}


const gameFun = rollDiceBtn.addEventListener('click', function(){
    if (playingStatus){
        const dice1 =Math.trunc(Math.random()*6) +1;
        const dice2 =Math.trunc(Math.random()*6) +1;
        
        diceTop.classList.remove('hidden');
        diceTop.src =`/img/dice/dice-${dice1}.png`;
        diceBottom.classList.remove('hidden');
        diceBottom.src = `/img/dice/dice-${dice2}.png`;
        cong_Sound.play();
        POP_SOUND.play();
        
        
        
        if (dice1 === 3 && dice2 === 3){
            document.getElementById(`score-current-player-${playerNum}`).textContent = currentScore1;
            currentScore1=0;
            cong_Sound.play();
            POP_SOUND.play();
            
            
        }else if(dice1 === 6 && dice2 === 6){
            switchPlayer();
            cong_Sound.play();
            POP_SOUND.play();
            
            

        }else{
            let sum = dice1 + dice2;
            currentScore1 += sum;
            document.getElementById(`score-current-player-${playerNum}`).textContent =currentScore1;
        }
        cong_Sound.play();
        POP_SOUND.play();
        
    }
})
let winNum = 0;
const gameOve = holdBtn.addEventListener('click', function(){
    
    if(playingStatus){
        score[playerNum]+= currentScore1;
        document.getElementById(`score-player-${playerNum}`).textContent =score[playerNum];
        cong_Sound.play();
        
        if (score[playerNum]<targetScore){
            switchPlayer()
            cong_Sound.play();
            
        }
        else if(score[playerNum]===targetScore){
            playingStatus=false;
            winNum += 1
            document.querySelector(`.player-${playerNum}-div`).classList.add('winner');
            document.querySelector(`.player-${playerNum}-div`).classList.remove('player-active');
            document.getElementById(`winCount-${playerNum}`).textContent = winNum;
            cong_Sound.play();
            
        }
        else{ 
            if(playerNum == 0){
                playingStatus=false;
                winNum += 1
                
                document.querySelector(`.player-1-div`).classList.add('winner');
                document.querySelector(`.player-0-div`).classList.remove('player-active');
                document.getElementById(`winCount-1`).textContent = winNum;
                cong_Sound.play();
                
            }
            else{
                playingStatus=false;
                winNum += 1
                
                document.querySelector(`.player-0-div`).classList.add('winner');
                document.querySelector(`.player-1-div`).classList.remove('player-active');
                document.getElementById(`winCount-0`).textContent = winNum;
                cong_Sound.play();
                
            }
        }
        
    }})
    newGameBtn.addEventListener('click', startNewGame);
    
    


    
    // newGameBtn1.onclick = function(){
    //     window.location.reload();
    // }
    
