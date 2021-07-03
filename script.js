//alert("yooo")

$(function(){
  $("button").click(function(){
    let userWord = $("#userWord").val();
    console.log(userWord + " debug");
    if(userWord === words[0]){
      alert("correct")
    }else{
      alert("incorrect")
    }
  })
  $.get('test.txt', function(data){
    words = data.split();
    console.log(words[0]);
    $("#words").text(words[0]);
  })
  $("#userWord").keypress(function(e){
    console.log(e.target.value);
    
    
  })
})
