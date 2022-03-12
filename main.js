let mainSection = document.querySelector('#mainSection');
let playGame = document.querySelector('#playGame');
let homePage = document.querySelector('#home');
let playButton = document.querySelector('#playButton');

playButton.addEventListener('click', loadGame);

function toggle(elemToToggle) {
    elemToToggle.classList.toggle('hidden');
}

function loadGame() {
    toggle(homePage);
    toggle(playGame);

    const letterPrefix = ['A', 'B', 'C', 'D'];
    for (i = 0; i < 4; i++) {
        playGame.innerHTML += `
        <div class="choice-container">
        <p class="choice-prefix">${letterPrefix[i]}</p>
        <p class="choice-text">Choice ${i+1}</p>
        </div>`
    }
}



    // if(!elemToHide.classList.contains('hidden')) {
    //     elemToHide.classList.add('hidden');
    // } else {
    //     elemToHide.classList.remove('hidden');
    // }