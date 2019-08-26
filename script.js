const bubbleOne = $(".bubble");
const bubbleTwo = $(".bubble2");
const bubbleThree = $(".bubble3");

$(document).ready(function(){
  bubbleOne.on("click", function(event){ 
      $('.bubble').css('background-color', '#F5FFFA');
      
      $(".dynamic-caption").append('<p class="pop">pop</p>')  
  });
  
  $(".bubble2").on("click", function(event){ 
    bubbleTwo.css('background-color', '#F5FFFA');
    
    $(".dynamic-caption").append('<p class="pop2">pop</p>')   
  });      
    
  $(".bubble3").on("click", function(event){ 
      bubbleThree.css('background-color', '#F5FFFA');
      
      $(".dynamic-caption").append('<p class="pop3">pop</p>')  
  });

});