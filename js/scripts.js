var beepMachine = function(numberStr) {
  var numberArray = []
  return numberStr + numberStr;
}//beepMachine end








$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#inputNumber").val());
    var numberStr = $("#inputNumber").val();
    var result = beepMachine(numberStr);

    $(".result").text(result);



  });//end submit fxn
});//end doc rdy fxn
