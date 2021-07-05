//alert("yooo")

$(function(){
  $("button").click(function(){
    let userWord = $("#userWord").val();
    console.log(userWord + " debug");
    if(userWord === words[rand]){
      alert("correct")
    }else{
      alert("incorrect")
    }
    rand = getRandomInt(words.length);
    $("#words").text(words[rand]);
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
