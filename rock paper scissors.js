var myRandom = ['Rock', 'Paper', 'Scissors']

function rock() {
  var a = "rock";
    var randomValue = myRandom[Math.floor(Math.random() * myRandom.length)];
  alert('Computer chose ' + randomValue)
  if(randomValue === 'Rock') {
    alert('You Tied!')
  }
  if(randomValue === 'Paper') {
     alert('You Lost!')
  }
  if(randomValue === 'Scissors') {
     alert('You Won!')
  }
}
function paper() {
  var a = "paper";
    var randomValue = myRandom[Math.floor(Math.random() * myRandom.length)];
  alert('Computer chose ' + randomValue)
  if(randomValue === 'Rock') {
    alert('You Won!')
  }
  if(randomValue === 'Paper') {
     alert('You Tied!')
  }
  if(randomValue === 'Scissors') {
     alert('You Lost!')
  }
}
function scissors() {
  var a = "scissors";
    var randomValue = myRandom[Math.floor(Math.random() * myRandom.length)];
  alert('Computer chose ' + randomValue)
  if(randomValue === 'Rock') {
    alert('You Lost!')
  }
  if(randomValue === 'Paper') {
     alert('You Won!')
  }
  if(randomValue === 'Scissors') {
     alert('You Tied!')
  }
}