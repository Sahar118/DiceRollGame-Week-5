// Selecting element
const player0 = document.querySelector('.player-0-div');
const player1 = document.querySelector('.player-1-div')
const scorePlayer0 = document.querySelector('#score-player-0');
const scorePlayer1 = document.querySelector('#score-player-1');
const scoreCurrent1 = document.getElementById('score-current-player-0')
const scoreCurrent2 = document.getElementById('score-current-player-1')
const diceTop = document.querySelector('#dice-top');
const diceBottom = document.querySelector('#dice-bottom');
const newGameBtn = document.querySelector('#new-game');
const rollDiceBtn = document.querySelector('#roll-dice');
const holdBtn = document.querySelector('#hold');

// 
scorePlayer0.textContent=0;
scorePlayer1.textContent=0;
scoreCurrent1.textContent=0;
scoreCurrent2.textContent=0;

diceTop.classList.add('hidden');
diceBottom.classList.add('hidden');


// 
const score =[0,0];
let playerNum = 0;
let currentScore1 = 0;
let currentScore2 = 0;

const switchPlayer = function(){
    document.getElementById(`score-current-player-${playerNum}`).textContent = currentScore1;
    currentScore1=0;
    playerNum = playerNum === 0 ? 1 : 0; 
    
    player0.classList.toggle('player-active');
    player1.classList.toggle('player-active');
}

rollDiceBtn.addEventListener('click', function(){

    const dice1 =Math.trunc(Math.random()*6) +1;
    const dice2 =Math.trunc(Math.random()*6) +1;
    diceTop.classList.remove('hidden');
    diceTop.src =`/img/dice/dice-${dice1}.png`;
    diceBottom.classList.remove('hidden');
    diceBottom.src = `/img/dice/dice-${dice2}.png`;
    if (dice1 === 3 && dice2 === 3){
        currentScore1=0;
        document.getElementById(`score-current-player-${playerNum}`).textContent = currentScore1;
        // scoreCurrent2.textContent =currentScore2;
        
    }else if(dice1 === 6 && dice2 === 6){
        switchPlayer();
        // document.getElementById(`score-current-player-${playerNum}`).textContent = currentScore1;
        // currentScore1=0; 
        // playerNum = playerNum === 0 ? 1 : 0; 
        // player1.classList.toggle('player-active');
        // player2.classList.toggle('player-active');
    }else{
        let sum = dice1 + dice2;
        currentScore1 += sum;
        scoreCurrent1.textContent =currentScore1;
    }
})


holdBtn.addEventListener('click', function(){
    score[playerNum]+= currentScore1;
    document.getElementById(`score-player-${playerNum}`).textContent =score[playerNum];
    // document.getElementById(`score-current-player-${playerNum}`).textContent = currentScore1;
    //     currentScore1=0;
    //     playerNum = playerNum === firstPlayer ? secondPlayer : firstPlayer; 
    //     player1.classList.toggle('.player--active');
    //     player2.classList.toggle('.player--active');
    switchPlayer();

})






// const btn = document.querySelector('button');
// const input = document.querySelector('input');
// const smileContainer = document.querySelector('.smileContainer');
// let SCLength =document.querySelector('.smileContainer').children;


// btn.addEventListener('click',addSmiley);

// function addSmiley (){
// smileContainer.innerHTML='';
// if(Number(input.value)){
//     for (let i = 0; i < Number(input.value); i++) {
//         smileContainer.append(createSmiley())
//     }
// }
// else{
//     smileContainer.innerHTML='Error!! Please Enter only Numbers!';
// }
// };

// function createSmiley (){
// const  image = document.createElement('img')
// image.setAttribute('src','smiley.png')
// image.style.height= '50px';
// image.style.width= '50px';

// return image
// }
        
