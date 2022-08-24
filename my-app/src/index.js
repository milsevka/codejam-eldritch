import ancientsData from './data/ancients.js'
import Ancients from './assets/Ancients/index.js';


const ancientCardButton = document.querySelector('.ancient_card');
let checkDifficult = document.querySelectorAll('.tittle-difficulty');
let mixButton = document.querySelector('.tittle-mix')
const dots = document.querySelectorAll('.dot')

ancientCardButton.addEventListener("click", () => {
    
  ancientCardButton.classList.toggle("active") 
});
  checkDifficult[2].addEventListener("click", () => {
    checkDifficult[2].classList.toggle("active") 
  });
  mixButton.addEventListener("click", () => {
    mixButton.classList.toggle("active") 
  });

//   for (let i = 0; i < Ancients.length; i++) {
//     if (Ancients[i].classList.contains('active')) {
//         dots[0].textContent = ancientsData[i].firstStage.greenCards;
//         dots[1].textContent = ancientsData[i].firstStage.brownCards;
//         dots[2].textContent = ancientsData[i].firstStage.blueCards;
//         dots[3].textContent = ancientsData[i].secondStage.greenCards;
//         dots[4].textContent = ancientsData[i].secondStage.brownCards;
//         dots[5].textContent = ancientsData[i].secondStage.blueCards;
//         dots[6].textContent = ancientsData[i].thirdStage.greenCards;
//         dots[7].textContent = ancientsData[i].thirdStage.brownCards;
//         dots[8].textContent = ancientsData[i].thirdStage.blueCards;
//     }
    
// }    
// ;
