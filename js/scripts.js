  // var beepMachine = function(number) {
  //
  //   var numberArray = [];
  //   if (number%3 === 0){
  //     return "I'm sorry, Dave. I can't do that";
  //   }
  //   for (i = 0; i < number; i++) {
  //     numberArray.push(i);
  //   }//for loop1 end
  //     for (a = 0; a < numberArray.length; a++)
  //       if (numberArray[a] === 0){
  //         var numberArray = numberArray.toString();
  //         var numberArray = numberArray.split("0").join("Boop ");
  //         // var numberArray = parseInt(numberArray);
  //       } else if (numberArray[a] === "1"){
  //         var numberArray = numberArray.toString();
  //         var numberArray = numberArray.split("1").join("Beep ")
  //       }
  //
  //       return numberArray;
  // }//beepMachine end

var beepMachine = function(number) {
var numberArray = [];
var numberArrayOutput = [];

  for (i = 0; i <= number; i++) {
    numberArray.push(i);
    console.log(numberArray + "num array");
  }//for loop end
    for (b = 0; b <= numberArray.length; b++) {
    } if (numberArray.includes(0,b)) {
      debugger
      numberArrayOutput.push("Boop!");
      console.log(numberArrayOutput + "num array output")
    } else if (numberArray.includes(1,b)) {
      numberArrayOutput.push("Beep!");
    } else if (numberArray[b] % 3 === 0 && numberArray[b] !==0) {
      numberArrayOutput.push("I'm sorry, Dave. I can't do that.");
    } else {
      numberArrayOutput.push(numberArray[b]);
    }
    return numberArrayOutput;
}//end beepmachine fxn







$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#inputNumber").val());
    // var numberStr = $("#inputNumber").val();
    var result = beepMachine(number);
    $(".result").append("<p>" + "I SAY: " + result + "</p>");




  });//end submit fxn
});//end doc rdy fxn
