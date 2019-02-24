let min = 1,
    max = 10,
    winningNum = getRandomNum(min,max);
    guessesLeft = 3;

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

    minNum.textContent = min;
    maxNum.textContent = max;
      
  game.addEventListener('mousedown',function(e){
if(e.target.className ==='play-again')
{
  window.location.reload();
}
  });    
guessBtn.addEventListener('click',function()
{
let guess = parseInt(guessInput.value);

if(isNaN(guess) || guess <min || guess > max) 
{
  setMessage(`Please Enter the text between ${min} and ${max}` ,'red');
setTimeout(clearMessage, 3000);
}
if(guess === winningNum)
{
  gameOver(true,`${winningNum} is correct YOUWIN!`);

}
else{
  guessesLeft -=1;
  if(guessesLeft === 0)
  {
    gameOver(false,`GameOver.you lost. Winning number is ${winningNum} `);
    
  }
  else{
    guessInput.value ='';
    guessInput.style.borderColor = 'red';
    setMessage(`${guess} is not correct, ${guessesLeft} guesses left`,)
  }

}
});
function setMessage(msg, color)
{
  message.textContent = msg;
  message.style.color = color;

}
function clearMessage()
{
  message.remove();
}
function gameOver(won,msg)
{
  let color;
  won === true ? color ='green' : color = 'red';
  guessInput.disabled = true;
guessInput.style.borderColor = color;
message.style.color = color;
setMessage(msg);
guessBtn.value =  'Play Again';
guessBtn.className += 'play-again';
}
function getRandomNum(min,max)
{
  return Math.floor(Math.random()*(max-min+1)+min);
}