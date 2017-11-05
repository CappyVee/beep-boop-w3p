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
  var outputArray = []
  for (i = 0; i <= number; i++) {
    var aye = String(i);
    if (aye.includes("0")) {
      outputArray.push("Boop!")
    } else if (aye.includes("1")) {
      outputArray.push("Beep!")
    } else if (i % 3 === 0) {
      outputArray.push("I'm sorry, Dave.")
    } else {
      outputArray.push(i);
    }
  }//for loop end
  return outputArray;
}//end beepmachine function







$(document).ready(function(){
  $("#inputForm").submit(function(event){
    event.preventDefault();
    var number = parseInt($("#inputNumber").val());
    // var numberStr = $("#inputNumber").val();
    var result = beepMachine(number);
    $(".result").append("<p>" + "I SAY: " + result + "</p>");




  });//end submit fxn
});//end doc rdy fxn
