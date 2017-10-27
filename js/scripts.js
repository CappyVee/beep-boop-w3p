  var beepMachine = function(number) {
    var numberArray = [];
    for (i = 0; i < number; i++) {
      numberArray.push(i);
      alert(numberArray);
    }//for loop end
    return numberArray.toString();
    $(".result").text(result);
  }//beepMachine end








$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#inputNumber").val());
    var numberStr = $("#inputNumber").val();
    var result = beepMachine(number);





  });//end submit fxn
});//end doc rdy fxn
