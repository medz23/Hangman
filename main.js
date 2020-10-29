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
displayWord();
