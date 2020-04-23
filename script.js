// css class for different card image
const CARD_TECHS = [
  'html5',
  'css3',
  'js',
  'sass',
  'nodejs',
  'react',
  'linkedin',
  'heroku',
  'github',
  'aws'
];

// only list out some of the properties,
// add more when needed
const game = {
  score: 0,
  level: 1,
  timer: 60,
  timerDisplay: null,
  scoreDisplay: null,
  levelDisplay: null,
  timerInterval: null,
  startButton: null
  // and much more
};

//card attribute
var card = {
  operand : [],
  cardclass : [],
  status : null,
  
  
};

setGame();

/*******************************************
/     game process
/******************************************/
function setGame() {
  // register any element in your game object
  bindStartButton()
  bindCardClick()

  var timertext = document.querySelector(".game-timer");

  
  console.log(timertext);
 

  

}

function startGame() {
  //timer begin to decrease
  console.log("hello");

  //test 60s if yes call handleGameOver
}

function handleCardFlip() {
  //compare the first card and second card if yes card font face show and score increases
  var fisrtOperand = card.operand[0].value;
  var secondOperand = card.operand[1].value;

  console.log(card.cardclass[0]);
  console.log(card.cardclass[1]);
  if (fisrtOperand === secondOperand){
    console.log("ture");
    console.log(fisrtOperand);
    card.cardclass[0].value = fisrtOperand + " card__face card__face--back";
    card.cardclass[1].value = fisrtOperand + " card__face card__face--back";
    card.status = true;
  }else{
    console.log("false");
    card.status = false; 
  }
// console.log(card.operand[0].value);
  //else back face shows
  card.operand.splice(0,card.operand.length);
  
}

function nextLevel() {}

function handleGameOver() {
  //alert shows
}

/*******************************************
/     UI update
/******************************************/
function updateScore() {}

function updateTimerDisplay() {}

/*******************************************
/     bindings
/******************************************/
function bindStartButton() {
  var start_button = document.querySelector(".game-stats__button");
  console.log(start_button);
  start_button.addEventListener('click',function(){
    // if click start button,then call startGame func
    startGame();
  });
}

function unBindCardClick(card) {}

function bindCardClick() {
  var keys = document.querySelector(".game-board");
  console.log(keys);
  keys.addEventListener('click', function(event){
     
    var target = event.target.offsetParent.classList;
    var targetclass = event.target.classList;

    
    card.operand.push(target);
    card.cardclass.push(targetclass);
    if(card.operand.length===2){
     handleCardFlip();
    
    }

    // if(target.offsetParent.classList.contains('html5')){
    //   console.log("html5");
    //   return;
    // }
   
    // console.log("css3");
   
     });

}
