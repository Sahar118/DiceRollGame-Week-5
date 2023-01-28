const modal = document.getElementById("myModal");
const newGameBtn = document.getElementById("new-game-btn");
const startGameBtn = document.getElementById("button-start-game-modal");
const doubleSixModal = document.getElementById("double-six-modal");

modal.classList.remove('hidden');

// newGameBtn.onclick = function(){
//     window.location.reload();
// }

startGameBtn.onclick = function(){
    openingSound.pause();
    modal.classList.add('hidden');
}

startGameBtn.addEventListener('click', function(e){
    targetScore = document.getElementById('targetScore').valueAsNumber;
})