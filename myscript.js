let j = 0;
let guessMax;
let guessMe = 0;
let levelGame = 1;
let inNumber = document.getElementById('myInput');
let randNum;
let maxScore = 0;
let lastScore = 100;
var bodyStyle = document.getElementsByTagName('body')[0];
let colorA1 = '#eb4d4b'; //thin hooter
let colorA2 = ' #f0932b'; //bold hotter
let colorB1 = ' #c7ecee'; //slow hotter
let colorB2 = ' #ff7979'; //slow hotter bold
let colorC1 = ' #686de0'; //thin cooler
let colorC2 = ' #4834d4'; //bold cooler
let colorD1 = ' #dff9fb'; //slow cooler
let colorD2 = ' #7ed6df'; //slow cooler bold
let colorE2 = '#6ab04c';
let colorE1 = '#badc58';
let resetColor1 = '#ffeaa7';
let resetColor2 = '#e17055';
const levelRange = {
  lv1Range: '0-200',
  lv2Range: '0-300',
  lv3Range: '0-400',
  lv4Range: '0-500',
  lv5Range: '0-600',
};

window.onload = function () {
  shuffleNumber();
};

function getLevelRange(x) {
  let ranged;
  switch (x) {
    case 1:
      ranged = levelRange.lv1Range;
      break;
    case 2:
      ranged = levelRange.lv2Range;
      break;
    case 3:
      ranged = levelRange.lv3Range;
      break;
    case 4:
      ranged = levelRange.lv4Range;
      break;
    case 5:
      ranged = levelRange.lv5Range;
      break;
  }
  return ranged;
}

function guessNumber(x) {
  let i = x;
  console.log('wrong :' + j);
  let thescore = getScore(j == 0 ? j : j - 1);
  if (i < guessMe) {
    if (guessMe - i > 10) {
      Swal.fire('Just far from guess, get hotter!');
      bodyStyle.style.background =
        'linear-gradient(to top left, ' + colorA2 + ',' + colorA1 + ')';
    } else {
      Swal.fire('Yaak, almost, hotter slowly!');
      bodyStyle.style.background =
        'linear-gradient(to top left, ' + colorB1 + ',' + colorB2 + ')';
    }
  } else if (i > guessMe) {
    if (i - guessMe > 10) {
      Swal.fire('Just far from guess, get cooler!');
      bodyStyle.style.background =
        'linear-gradient(to top left, ' + colorC1 + ',' + colorC2 + ')';
    } else {
      Swal.fire('Yaak, almost, cooler slowly!');
      bodyStyle.style.background =
        'linear-gradient(to top left, ' + colorD1 + ',' + colorD2 + ')';
    }
  } else {
    bodyStyle.style.background =
      'linear-gradient(to top left, ' + colorE1 + ',' + colorE2 + ')';
    levelGame = levelGame + 1;
    maxScore = maxScore + thescore;
    lastScore = lastScore > maxScore ? lastScore : maxScore;
    Swal.fire({
      icon: 'success',
      title: 'Congratss, Your Score is: ' + thescore,
      text: 'Next Level is ' + levelGame,
      showDenyButton: true,
      denyButtonText: 'Exit',
    }).then((result) => {
      if (result.isConfirmed) {
        shuffleNumber();
      } else if (result.isDenied) {
        resetTheGame(maxScore);
      }
    });
    if (levelGame == 6) {
      Swal.fire({
        icon: 'success',
        title: `Congratss, Your Total Score is: ${maxScore} of 500`,
        text: 'Reset to Level 1 ',
        showDenyButton: true,
        denyButtonText: 'Exit',
      }).then((res) => {
        if (res.isConfirmed) {
          shuffleNumber();
        } else if (res.isDenied) {
          resetTheGame(maxScore);
        }
      });
      levelGame = 1;
      maxScore = 0;
    }
  }

  j++;
  if (j == guessMax) {
    resetTheGame();
  }
  document.getElementById('tagDetect').innerHTML = 'Guessing Count: ' + j;
}

function resetTheGame(mxscore) {
  Swal.fire({
    icon: 'error',
    title: 'GAME OVER!',
    text: 'Your Score is ' + maxScore + '\n Reset to Level 1',
  }).then((res) => {
    if (res.isConfirmed) {
      shuffleNumber();
    }
  });
  j = 0;
  levelGame = 1;
  document.getElementById('tagDetect').innerHTML = 'Guessing Count: ' + j;
}

function meGetClick() {
  var inputField = parseInt(document.getElementById('myInput').value);
  if (isNaN(inputField)) {
    Swal.fire({
      icon: 'error',
      title: 'Please Insert Number',
    });
  } else {
    guessNumber(inputField);
  }
}

function shuffleNumber() {
  bodyStyle.style.background =
    'linear-gradient(to top left, ' + resetColor2 + ',' + resetColor1 + ')';
  document.getElementById('tagNumTBG').innerHTML =
    'Number to be Guess: ' + getLevelRange(levelGame);
  var randomNumber;
  j = 0;
  document.getElementById('tagDetect').innerHTML = 'Guessing Count: ' + j;
  document.getElementById('highScoreTag').innerHTML = lastScore;
  switch (levelGame) {
    case 1:
      randomNumber = Math.floor(Math.random() * 201);
      guessMax = 50;
      Swal.fire({
        icon: 'info',
        title: 'Level ' + levelGame,
        text:
          "The number you've to guess is between " + getLevelRange(levelGame),
      });
      break;
    case 2:
      randomNumber = Math.floor(Math.random() * 301);
      guessMax = 40;
      Swal.fire({
        icon: 'info',
        title: 'Level ' + levelGame,
        text:
          "The number you've to guess is between " + getLevelRange(levelGame),
      });
      break;
    case 3:
      randomNumber = Math.floor(Math.random() * 401);
      guessMax = 30;
      Swal.fire({
        icon: 'info',
        title: 'Level ' + levelGame,
        text:
          "The number you've to guess is between " + getLevelRange(levelGame),
      });
      break;
    case 4:
      randomNumber = Math.floor(Math.random() * 501);
      guessMax = 20;
      Swal.fire({
        icon: 'info',
        title: 'Level ' + levelGame,
        text:
          "The number you've to guess is between " + getLevelRange(levelGame),
      });
      break;
    case 5:
      randomNumber = Math.floor(Math.random() * 601);
      guessMax = 10;
      Swal.fire({
        icon: 'info',
        title: 'Level ' + levelGame,
        text:
          "The number you've to guess is between " + getLevelRange(levelGame),
      });
      break;
  }
  //var randomNumber = Math.floor(Math.random() * 201); //
  randNum = randomNumber;
  guessMe = randomNumber;
  j = 0;

  document.getElementById('tagDetect').innerHTML = 'Guessing Count: ' + j;
  document.getElementById('myInput').value = '';
  document.getElementById('maxGuessing').innerHTML =
    'Max Guessing: ' + guessMax;
  document.getElementById('tagLevel').innerHTML = 'Level: ' + levelGame;
  console.log('level: ' + levelGame);
  console.log('guessMax: ' + guessMax);
  console.log('randomNumber: ' + randNum);
}

inNumber.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    meGetClick();
  }
});

function getScore(countWrong) {
  let myscore = 0;
  switch (levelGame) {
    case 1:
      myscore = Math.round((guessMax - countWrong) * 2);
      break;
    case 2:
      myscore = Math.round((guessMax - countWrong) * 2.5);
      break;
    case 3:
      myscore = Math.round((guessMax - countWrong + 10) * 2.5);
      break;
    case 4:
      myscore = Math.round((guessMax - countWrong) * 5);
      break;
    case 5:
      myscore = Math.round((guessMax - countWrong) * 10);
      break;
  }
  return myscore;
}
