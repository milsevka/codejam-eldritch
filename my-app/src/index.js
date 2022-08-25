import ancientsData from "./data/ancients.js";
import Ancients from "./assets/Ancients/index.js";

import blueCardsData from "./data/mythicCards/blue/index";
import brownCardsData from "./data/mythicCards/brown/index";
import greenCardsData from "./data/mythicCards/green/index";

let ancientCardButton = document.querySelector(".ancient_card");
let checkDifficult = document.querySelector(".tittle-difficulty");
let mixButton = document.querySelector(".tittle-mix");
const dots = document.querySelectorAll(".dot");
const desk = document.querySelector(".desk");
const lastCard = document.querySelector(".last-card");
const cardsContainer = document.querySelector(".ancient_container");
const currentState = document.querySelector(".current_state");

const Azathoth = document.getElementById("Azathoth");
const Cthulhu = document.getElementById("Cthulhu");
const IogSothoth = document.getElementById("IogSothoth");
const ShubNiggurath = document.getElementById("ShubNiggurath");

Azathoth.addEventListener("click", () => checkCard("azathoth", Azathoth));
Cthulhu.addEventListener("click", () => checkCard("cthulhu", Cthulhu));
IogSothoth.addEventListener("click", () => checkCard("iogSothoth", IogSothoth));
ShubNiggurath.addEventListener("click", () =>
  checkCard("shubNiggurath", ShubNiggurath)
);

function checkCard(nameAnsients, cardElement) {
  let findCards = ancientsData.find((item) => item.id === nameAnsients);
  document
    .querySelectorAll(".ancient_card")
    .forEach((element) => element.classList.remove("active"));
  cardElement.classList.add("active");
  checkDifficult.classList.remove("activeblock");
  dots[0].textContent = findCards.firstStage.greenCards;
  dots[1].textContent = findCards.firstStage.brownCards;
  dots[2].textContent = findCards.firstStage.blueCards;
  dots[3].textContent = findCards.secondStage.greenCards;
  dots[4].textContent = findCards.secondStage.brownCards;
  dots[5].textContent = findCards.secondStage.blueCards;
  dots[6].textContent = findCards.thirdStage.greenCards;
  dots[7].textContent = findCards.thirdStage.brownCards;
  dots[8].textContent = findCards.thirdStage.blueCards;

  let stack = [
    [[], [], []],
    [[], [], []],
    [[], [], []],
  ];
  let numberDot = [
    (stack[0][0].length = findCards.firstStage.greenCards),
    (stack[0][1].length = findCards.firstStage.brownCards),
    (stack[0][2].length = findCards.firstStage.blueCards),
    (stack[1][0].length = findCards.secondStage.greenCards),
    (stack[1][1].length = findCards.secondStage.brownCards),
    (stack[1][2].length = findCards.secondStage.blueCards),
    (stack[2][0].length = findCards.thirdStage.greenCards),
    (stack[2][1].length = findCards.thirdStage.brownCards),
    (stack[2][2].length = findCards.thirdStage.blueCards),
  ];

  let greenArray = [];
  let brownArray = [];
  let blueArray = [];

  function getRandomNum(max) {
    let min = 0;
    max = Math.floor(max);
    let number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
  }

  while (greenArray.length < numberDot[0] + numberDot[3] + numberDot[6]) {
    let greenCard = greenCardsData[getRandomNum(17)];
    if (!greenArray.includes(greenCard)) {
      greenArray.push(greenCard);
    }
  }
  while (blueArray.length < numberDot[2] + numberDot[5] + numberDot[8]) {
    let blueCard = blueCardsData[getRandomNum(11)];
    if (!blueArray.includes(blueCard)) {
      blueArray.push(blueCard);
    }
  }
  while (brownArray.length < numberDot[1] + numberDot[4] + numberDot[7]) {
    let brownCard = brownCardsData[getRandomNum(20)];
    if (!brownArray.includes(brownCard)) {
      brownArray.push(brownCard);
    }
  }
  let mainArray = [].concat(greenArray, blueArray, brownArray);

  let firstStageCards = [];
  let secondStageCards = [];
  let thirdStageCards = [];
  let stageCards = [firstStageCards, secondStageCards, thirdStageCards];

  for (let stage = 0; stage < 3; stage++) {
    let i = 0;
    let length = 0;
    for (3 * stage + i; 3 * stage + i < 3 * stage + 3; i++) {
      let color;
      length = length + numberDot[3 * stage + i];
      switch (i) {
        case 0:
          color = "green";
          break;
        case 1:
          color = "brown";
          break;
        case 2:
          color = "blue";
      }
      if (numberDot[3 * stage + i] > 0) {
        for (let j = 0; j < mainArray.length; j++) {
          if (mainArray[j].color == color) {
            stageCards[stage].push(mainArray[j]);
            mainArray.splice(j, 1);
            j--;
            if (stageCards[stage].length == length) {
              break;
            }
          }
        }
      }
    }
  }
  console.log(stageCards);
  firstStageCards.sort(function () {
    return 0.5 - Math.random();
  });
  secondStageCards.sort(function () {
    return 0.5 - Math.random();
  });
  thirdStageCards.sort(function () {
    return 0.5 - Math.random();
  });

  desk.addEventListener("click", () => {
    if (stageCards.length > 0) {
      let currentCard = stageCards[0].shift().cardFace;
      lastCard.style.backgroundImage = currentCard;
      if (stageCards[0].length === 0) {
        stageCards.splice(0, 1);
      }
      
      if (currentCard.includes('brown'))   {
        dots[1].innerHTML = --findCards.firstStage.brownCards
        if (findCards.firstStage.brownCards < 0) {
          dots[1].innerHTML = ++findCards.firstStage.brownCards
          dots[4].innerHTML = --findCards.secondStage.brownCards;
          if (findCards.secondStage.brownCards < 0) {
          dots[4].innerHTML = ++findCards.secondStage.brownCards;
          dots[7].innerHTML = --findCards.thirdStage.brownCards;
          }
        }
      }
      if (currentCard.includes('blue'))   {
        dots[2].innerHTML = --findCards.firstStage.blueCards
        if (findCards.firstStage.blueCards < 0) {
          dots[2].innerHTML = ++findCards.firstStage.blueCards
          dots[5].innerHTML = --findCards.secondStage.blueCards;
          if (findCards.secondStage.blueCards < 0) {
            dots[5].innerHTML = ++findCards.secondStage.blueCards;
            dots[8].innerHTML = --findCards.thirdStage.blueCards;
          }
        }
      }
      if (currentCard.includes('green'))   {
        dots[0].innerHTML = --findCards.firstStage.greenCards
        if (findCards.firstStage.greenCards < 0) {
          dots[0].innerHTML = ++findCards.firstStage.greenCards
          dots[3].innerHTML = --findCards.secondStage.greenCards;
          if (findCards.secondStage.greenCards < 0) {
            dots[3].innerHTML = ++findCards.secondStage.greenCards;
            dots[6].innerHTML = --findCards.thirdStage.greenCards;
          }
        }
      }
    } else {
      lastCard.classList.add("activeblock");
    }

    
  });
  
 
}


checkDifficult.addEventListener("click", () => {
  checkDifficult.classList.add("active");
  mixButton.classList.remove("activeblock");
});
mixButton.addEventListener("click", () => {
  mixButton.classList.add("active");
  currentState.classList.remove("activeblock");
  desk.classList.remove("activeblock");
});

  



