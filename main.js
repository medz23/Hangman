const wordEl = document.getElementById('word');
const wrongLettersEl = document.getElementById('wrong-letters');
const playAgainBtn = document.getElementById('play-again');
const popup = document.getElementById('popup-container');
const notification = document.getElementById('notification-container');
const finalMessage = document.getElementById('final-message');

const figureParts = document.querySelectorAll('.figure-part');

const words = ['accomplish', 'acknowledge', 'assessment', 'beginning', 'celebration', 'decrease',
              'elementary', 'environment', 'flavor', 'gentleman', 'guarantee',
              'historical', 'improvement', 'landscape', 'manufacturing', 'nevertheless',
              'obviously', 'particularly', 'recommendation', 'settlement', 'throughout',
              'idem', 'unfortunately', 'visible', 'weapon' ];

let selectedWord = words[Math.floor(Math.random()*words.length)];

const correctLetters = ['m','e', 'd', 'i'];
const wrongLetters = [];

//show hidden words

function displayWord() {
  wordEl.innerHTML = `${selectedWord
                          .split('')
                          .map(letter => `<span class="letter">
                           ${correctLetters.includes(letter) ? letter : '' }
                          </span>`).join('')}
                        `;

  const innerWord = wordEl.innerText.replace(/\n/g, '');
  if(innerWord === selectedWord) {
    finalMessage.innerText = 'You Won!';
    popup.style.display = 'flex';
  }
}

//update wrong letters

function updateWrongLettersEl() {

}

//show notification

function showNotification() {
  notification.classList.add('show');

  setTimeout(() => {
    notification.classList.remove('show');
  }, 2000);
}


//letter press
window.addEventListener('keydown', e => {
  if(e.keyCode >= 65 && e.keyCode <= 90) {
    const letter = e.key;
    if(selectedWord.includes(letter)) {
      if(!correctLetters.includes(letter)) {
        correctLetters.push(letter);

        displayWord();
      }
      else {
        showNotification();
      }
    }
    else {
      if(!wrongLetters.includes(letter)){
        wrongLetters.push(letter);

        updateWrongLettersEl();
      }
      else{
        showNotification();
      }
    }
}});
displayWord();
