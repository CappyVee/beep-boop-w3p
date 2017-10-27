  var beepMachine = function(number) {
    var noises = ["Boop!","Beep!","I'm sorry, Dave. I can't do that."];
    var numMatch = ["0","1","x"];
    var numberArray = [];
    if (number%3 === 0){
      return "I'm sorry Dave";
    }
    for (i = 0; i < number; i++) {
      numberArray.push(i);
      // numberArray.toString();
      // alert(numberArray);
    }//for loop1 end
      for (a = 0; a < numberArray.length; a++)
        if (numberArray[a] === 0){
          var numberArray = numberArray.toString();
          var numberArray = numberArray.split("0").join("Boop!");
        } else if (numberArray[a] === "1"){
          // var numberArray = numberArray.toString();
          var numberArray = numberArray.split("1").join("Beep!")
        }

        return numberArray;
    // for (b = 0; b < numberArray.length; b++){
    //   if
    // }
  }//beepMachine end








$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#inputNumber").val());
    var numberStr = $("#inputNumber").val();
    var result = beepMachine(number);
    $(".result").text(result);




  });//end submit fxn
});//end doc rdy fxn
