// Example word and image map for each letter
const alphabetData = {
  A: { word: "Apple", img: "assets/images/apple.png" },
  B: { word: "Ball", img: "assets/images/ball.png" },
  C: { word: "Cat", img: "assets/images/cat.png" },
  D: { word: "Dog", img: "assets/images/dog.png" },
  E: { word: "Elephant", img: "assets/images/elephant.png" },
  F: { word: "Fish", img: "assets/images/fish.png" },
  G: { word: "Giraffe", img: "assets/images/giraffe.png" },
  H: { word: "Hat", img: "assets/images/hat.png" },
  I: { word: "Icecream", img: "assets/images/icecream.png" },
  J: { word: "Jug", img: "assets/images/jug.png" },
  K: { word: "King", img: "assets/images/king.png" },
  L: { word: "Lion", img: "assets/images/lion.png" },
  M: { word: "Monkey", img: "assets/images/monkey.png" },
  N: { word: "Nest", img: "assets/images/nest.png" },
  O: { word: "Orange", img: "assets/images/orange.png" },
  P: { word: "Parrot", img: "assets/images/parrot.png" },
  Q: { word: "Queen", img: "assets/images/queen.png" },
  R: { word: "Rabbit", img: "assets/images/rabbit.png" },
  S: { word: "Sun", img: "assets/images/sun.png" },
  T: { word: "Tiger", img: "assets/images/tiger.png" },
  U: { word: "Umbrella", img: "assets/images/umbrella.png" },
  V: { word: "Violin", img: "assets/images/violin.png" },
  W: { word: "Watch", img: "assets/images/watch.png" },
  X: { word: "Xylophone", img: "assets/images/xylophone.png" },
  Y: { word: "Yak", img: "assets/images/yak.png" },
  Z: { word: "Zebra", img: "assets/images/zebra.png" }
};

const alphabetGrid = document.getElementById('alphabetGrid');
const popup = document.getElementById('alphaPopup');
const popupLetter = document.getElementById('popupLetter');
const popupWord = document.getElementById('popupWord');
const popupImg = document.getElementById('popupImg');

function showPopup(letter) {
  popupLetter.textContent = letter;
  popupWord.textContent = alphabetData[letter].word;
  popupImg.src = alphabetData[letter].img;
  popup.style.display = 'block';
}
window.closePopup = function() {
  popup.style.display = 'none';
};

// Generate buttons A-Z
const letters = Object.keys(alphabetData);
letters.forEach(letter => {
  const btn = document.createElement('button');
  btn.textContent = letter;
  btn.className = 'alpha-btn';
  btn.onclick = () => showPopup(letter);
  alphabetGrid.appendChild(btn);
});
