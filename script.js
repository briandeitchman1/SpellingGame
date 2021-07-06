//alert("yooo")

$(function(){
  let correctWords = $("#correctWords");
  let incorrectWords = $("#incorrectWords")
  $("#submit").click(function(){
    let userWord = $("#userWord").val();
    console.log(userWord + " debug");
    
    if(userWord === words[rand]){
      correctWords.append(words[rand] +" ");
    }else{
      incorrectWords.append(words[rand] +" ");
    } 

    rand = getRandomInt(words.length);
    $("#words").text(words[rand]);
  })
  $("#sayWordButton").click(function(){
    var synth = window.speechSynthesis;
    var utterThis = new SpeechSynthesisUtterance(words[rand]);
    synth.speak(utterThis);
  })
  $.get('test.txt', function(data){
    words = data.split(" ");
    rand = getRandomInt(words.length);
    console.log(words[rand]);
    $("#words").text(words[rand]);
  })
  $("#userWord").keypress(function(e){
    console.log(e.target.value); 
  })
  // returns an int from 0 to max-1
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
  

})
