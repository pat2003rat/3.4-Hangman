(function(){
  "use strict";
//https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById
  var userInterface = document.getElementById('userInterface');
  var guessing = document.getElementById('guessing');
  var guess = document.getElementById('userCharacterGuess');
  var numberOfTurns = document.getElementById('numberOfTurns');
  var totalTurn = 11.0;


  numberOfTurns.textContent = totalTurn;

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function randomWord(commonWords){
      var randomIndex = commonWords[Math.floor(Math.random()*commonWords.length)];
      return randomIndex;
    }
  var word = commonWords.filter(function(words){
    return words.length>=3;
  });

  var guessingWord = randomWord(word).split('');
  var hiddenCharacter = new Array(guessingWord.length);
  for (var i = 0; i < hiddenCharacter.length; i++){
    hiddenCharacter[i] = " ? ";
  }

  function printGuessWord(){
    for (var i = 0; i < hiddenCharacter.length; i++){
      var holder = document.createTextNode(hiddenCharacter[i]);
      guessing.appendChild(holder);
    }
  }
  function clearInputValue(){
    guess.value = "";
  }

  var checkGuess = function(){
    for (var i = 0; i < guessingWord.length; i++){
      if (guessingWord[i] === guess.value){
        hiddenCharacter[i] = guess.value;
        guessing.textContent = '';
        printGuessWord();
        var truth = true;
      }
    }
    if(guessingWord.indexOf(guess.value) == -1){
      totalTurn -= 1;
      numberOfTurns.textContent = totalTurn;

    }

    if (totalTurn === 0){
      window.alert("Loser. Hit refresh to Start A New Game");
    }

    if(document.getElementById('guessing').textContent == guessingWord.join('')){
      alert('Winner!! Hit refresh to Start A New Game');
    }
  }

//https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener
  document.getElementById("userLetterGuessButton").addEventListener("click", checkGuess);
  guess.addEventListener("click", clearInputValue);

  var guessing = document.getElementById("guessing");
  guessing.innerHTML = "";
  printGuessWord();
}());
