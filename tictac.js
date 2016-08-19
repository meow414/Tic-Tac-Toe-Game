$(document).ready(function() {
  var a = [],
    array, input, output, userclicked, comp, ranOne = 0,
    ranTwo = 0,
    ranThree = 0,
    ranFour = 0,
    ranFive = 0,
    ranSix = 0,
    ranSeven = 0,
    ranEight = 0,
    ranNine = 0;
  array = [".1,.2,.3,.4,.5,.6,.7,.8,.9"];

  bootbox.dialog({
    message: "Choose X or O",
    title: "Tic Tac Toe game",
    buttons: {
      success: {
        label: "X",
        className: "btn-success",
        callback: function() {
            input = "X";
            output = "O";

            var randomInitialOutput = (function(ranarrayElement) {
              var ranarray = [".1", ".5"];
              ranarrayElement = ranarray[Math.floor(Math.random() * 2)]; //random element
              return ranarrayElement;
            })();

            $(randomInitialOutput).html(output); //random initial output
            a.push(output);
            $(array.join("")).click(function() {
              $(this).html(input);
              var hello = this; //Crazy code starts
              hello = hello.className.split(/\s+/);

              var blaharray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

              for (var i = 0; i < hello.length; i++) {
                if (blaharray.indexOf(hello[i]) >= 0) {
                  userclicked = "." + hello[i];

                }
              } //Crazy code ends to tell us what the user clicked

              a.push($(this).html());
              if (a.length == 9) {
                $(".yo").html("<input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
              } //Game Over

              if (randomInitialOutput == ".1") {
                $(".1").off("click");
                $(".1").removeClass("1");
                if ((ranTwo == 0) && (ranThree == 0) && (ranFour == 0) && (ranFive == 0) && (ranSix == 0) && (ranSeven == 0) && (ranEight == 0) && (ranNine == 0)) {
                  switch (userclicked) {
                    case ".2":
                      ranTwo++;
                      $(".7").html(output);
                      $(".7").off("click");
                      $(".7").removeClass("7");
                      $(".2").off("click");
                      $(".2").removeClass("2");
                      break;
                    case ".3":
                      ranThree++;
                      $(".7").html(output);
                      $(".7").off("click");
                      $(".7").removeClass("7");
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      break;
                    case ".4":
                      ranFour++;
                      $(".5").html(output);
                      $(".5").off("click");
                      $(".5").removeClass("5");
                      $(".4").off("click");
                      $(".4").removeClass("4");
                      break;
                    case ".5":
                      ranFive++;
                      $(".9").html(output);
                      $(".9").off("click");
                      $(".9").removeClass("9");
                      $(".5").off("click");
                      $(".5").removeClass("5");
                      break;
                    case ".6":
                      ranSix++;
                      $(".3").html(output);
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      $(".6").off("click");
                      $(".6").removeClass("6");
                      break;
                    case ".7":
                      ranSeven++;
                      $(".3").html(output);
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      $(".7").off("click");
                      $(".7").removeClass("7");
                      break;
                    case ".8":
                      ranEight++;
                      $(".3").html(output);
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      $(".8").off("click");
                      $(".8").removeClass("8");
                      break;
                    case ".9":
                      ranNine++;
                      $(".3").html(output);
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      $(".9").off("click");
                      $(".9").removeClass("9");
                      break;
                  }
                } //if

                if ((ranTwo == 1) && (userclicked == ".4")) {
                  $(".5").html(output);
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  ranTwo = 2;
                } else if ((ranTwo == 2) && (userclicked == ".3")) {
                  $(".9").html(output); //comp won
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranTwo == 2) && (userclicked == ".9")) {
                  $(".3").html(output); //comp  won
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }
                if ((ranThree == 1) && (userclicked == ".4")) {
                  $(".9").html(output);
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  ranThree = 2;
                } else if ((ranThree == 2) && (userclicked == ".5")) {
                  $(".8").html(output); //comp won
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranThree == 2) && (userclicked == ".8")) {
                  $(".5").html(output); //comp won
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranFour == 1) && (userclicked == ".9")) {
                  $(".3").html(output);
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  ranFour = 2;
                } else if ((ranFour == 2) && (userclicked == ".2")) {
                  $(".7").html(output); //comp won
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranFour == 2) && (userclicked == ".7")) {
                  $(".2").html(output); //comp won
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranFive == 1) && (userclicked == ".7")) {
                  $(".3").html(output);
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  ranFive = 2;
                } else if ((ranFive == 2) && (userclicked == ".2")) {
                  $(".6").html(output); //comp won
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranFive == 2) && (userclicked == ".6")) {
                  $(".2").html(output); //comp won
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranSix == 1) && (userclicked == ".2")) {
                  $(".7").html(output);
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  ranSix = 2;
                } else if ((ranSix == 2) && (userclicked == ".4")) {
                  $(".5").html(output); //comp won
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSix == 2) && (userclicked == ".5")) {
                  $(".4").html(output); //comp won
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranSeven == 1) && (userclicked == ".2")) {
                  $(".5").html(output);
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  ranSeven = 2;
                } else if ((ranSeven == 2) && (userclicked == ".9")) {
                  $(".8").html(output);
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  ranSeven = 3;
                } else if ((ranSeven == 3) && (userclicked == ".6")) {
                  $(".4").html(output); //tie
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".yo").html("<h1>Tie</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSeven == 3) && (userclicked == ".4")) {
                  $(".6").html(output); //tie
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Tie</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranEight == 1) && (userclicked == ".2")) {
                  $(".5").html(output);
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  ranEight = 2;
                } else if ((ranEight == 2) && (userclicked == ".9")) {
                  $(".7").html(output); //comp won
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranEight == 2) && (userclicked == ".7")) {
                  $(".9").html(output); //comp won
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranNine == 1) && (userclicked == ".2")) {
                  $(".7").html(output);
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  ranNine = 2;
                } else if ((ranNine == 2) && (userclicked == ".4")) {
                  $(".5").html(output); //comp won
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranNine == 2) && (userclicked == ".5")) {
                  $(".4").html(output); //comp won
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

              } // randomInitialOutput==".1"
              else if (randomInitialOutput == ".5") {
                $(".5").off("click");
                $(".5").removeClass("5");
                if ((ranTwo == 0) && (ranThree == 0) && (ranFour == 0) && (ranOne == 0) && (ranSix == 0) && (ranSeven == 0) && (ranEight == 0) && (ranNine == 0)) {

                  switch (userclicked) {
                    case ".1":
                      ranOne++;
                      $(".9").html(output);
                      $(".9").off("click");
                      $(".9").removeClass("9");
                      $(".1").off("click");
                      $(".1").removeClass("1");
                      break;
                    case ".2":
                      ranTwo++;
                      $(".7").html(output);
                      $(".7").off("click");
                      $(".7").removeClass("7");
                      $(".2").off("click");
                      $(".2").removeClass("2");
                      break;
                    case ".3":
                      ranThree++;
                      $(".7").html(output);
                      $(".7").off("click");
                      $(".7").removeClass("7");
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      break;
                    case ".4":
                      ranFour++;
                      $(".9").html(output);
                      $(".9").off("click");
                      $(".9").removeClass("9");
                      $(".4").off("click");
                      $(".4").removeClass("4");
                      break;
                    case ".6":
                      ranSix++;
                      $(".1").html(output);
                      $(".1").off("click");
                      $(".1").removeClass("1");
                      $(".6").off("click");
                      $(".6").removeClass("6");
                      break; //case 6 break
                    case ".7":
                      ranSeven++;
                      $(".3").html(output);
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      $(".7").off("click");
                      $(".7").removeClass("7");
                      break; //case 7 break
                    case ".8":
                      ranEight++;
                      $(".3").html(output);
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      $(".8").off("click");
                      $(".8").removeClass("8");
                      break;
                    case ".9":
                      ranNine++;
                      $(".1").html(output);
                      $(".1").off("click");
                      $(".1").removeClass("1");
                      $(".9").off("click");
                      $(".9").removeClass("9");
                      break;
                  }
                } //if

                if ((ranTwo == 1) && (userclicked == ".3")) {
                  $(".1").html(output);
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  ranTwo = 2;
                } else if ((ranTwo == 2) && (userclicked == ".9")) {
                  $(".4").html(output); //comp won
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranTwo == 2) && (userclicked == ".4")) {
                  $(".9").html(output); //comp  won
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranThree == 1) && (userclicked == ".2")) {
                  $(".1").html(output);
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  ranThree = 2;
                } else if ((ranThree == 2) && (userclicked == ".4")) {
                  $(".9").html(output); //comp won
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranThree == 2) && (userclicked == ".9")) {
                  $(".4").html(output); //comp won
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranFour == 1) && (userclicked == ".1")) {
                  $(".7").html(output);
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  ranFour = 2;
                } else if ((ranFour == 2) && (userclicked == ".8")) {
                  $(".3").html(output); //comp won
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranFour == 2) && (userclicked == ".3")) {
                  $(".8").html(output); //comp won
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranOne == 1) && (userclicked == ".4")) {
                  $(".7").html(output);
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  ranOne = 2;
                } else if ((ranOne == 2) && (userclicked == ".8")) {
                  $(".3").html(output); //comp won
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranOne == 2) && (userclicked == ".3")) {
                  $(".8").html(output); //comp won
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranSix == 1) && (userclicked == ".9")) {
                  $(".3").html(output);
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  ranSix = 2;
                } else if ((ranSix == 2) && (userclicked == ".2")) {
                  $(".7").html(output); //comp won
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSix == 2) && (userclicked == ".7")) {
                  $(".2").html(output); //comp won
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranSeven == 1) && (userclicked == ".4")) {
                  $(".1").html(output);
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  ranSeven = 2;
                } else if ((ranSeven == 1) && (userclicked == ".1")) {
                  $(".4").html(output);
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  ranSeven = 2;
                } else if ((ranSeven == 2) && (userclicked = ".6")) {
                  $(".2").html(output);
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  ranSeven = 4;
                } else if ((ranSeven == 4) && (userclicked == ".8")) {
                  $(".9").html(output); //tie
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Tie</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSeven == 2) && (userclicked == ".2")) {
                  $(".9").html(output); //comp won
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $("2").off("click");
                  $(".2").removeClass("2");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSeven == 2) && (userclicked == ".9")) {
                  $(".2").html(output); //comp won
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSeven == 1) && (userclicked == ".6")) {
                  $(".9").html(output);
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  ranSeven = 2;
                } else if ((ranSeven == 2) && (userclicked == ".1")) {
                  $(".2").html(output);
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  ranSeven = 3;
                } else if ((ranSeven == 3) && (userclicked == ".8")) {
                  $(".4").html(output); //tie
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Tie</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSeven == 3) && (userclicked == ".4")) {
                  $(".8").html(output); //tie
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Tie</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } //ranSeven

                if ((ranEight == 1) && (userclicked == ".7")) {
                  $(".9").html(output);
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  ranEight = 2;
                } else if ((ranEight == 2) && (userclicked == ".1")) {
                  $(".6").html(output); //comp won
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranEight == 2) && (userclicked == ".6")) {
                  $(".1").html(output); //comp won
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } //ranEight

                if ((ranNine == 1) && (userclicked == ".2")) {
                  $(".7").html(output);
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  ranNine = 2;
                } else if ((ranNine == 2) && (userclicked == ".4")) {
                  $(".3").html(output); //comp won
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranNine == 2) && (userclicked == ".3")) {
                  $(".4").html(output); //comp won
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranNine == 1) && (userclicked == ".3")) {
                  $(".6").html(output);
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  ranNine = 2;
                } else if ((ranNine == 2) && (userclicked == ".4")) {
                  $(".2").html(output);
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  ranNine = 3;
                } else if ((ranNine == 3) && (userclicked == ".8")) {
                  $(".7").html(output); //tie
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Tie</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranNine == 1) && (userclicked == ".4")) {
                  $(".2").html(output);
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  ranNine = 4;
                } else if ((ranNine == 4) && (userclicked == ".3")) {
                  $(".8").html(output); //comp won
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranNine == 4) && (userclicked == ".8")) {
                  $(".3").html(output); //comp won
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

              } //randomInitialOutput =".5"
              else if (randomInitialOutput == ".7") {

              } else if (randomInitialOutput == ".3") {

              } else if (randomInitialOutput == ".9") {

              }

            }); //Ending bracket of userclick case X
          } //callback
      },
      main: {
        label: "O",
        className: "btn-primary",
        callback: function() {
            input = "O";
            output = "X";
            var randomInitialOutput = (function(ranarrayElement) {
              var ranarray = [".1", ".5"];
              ranarrayElement = ranarray[Math.floor(Math.random() * 2)]; //random element
              return ranarrayElement;
            })();

            $(randomInitialOutput).html(output); //random initial output
            a.push(output);
            $(array.join("")).click(function() {
              $(this).html(input);
              var hello = this; //Crazy code starts
              hello = hello.className.split(/\s+/);

              var blaharray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];

              for (var i = 0; i < hello.length; i++) {
                if (blaharray.indexOf(hello[i]) >= 0) {
                  userclicked = "." + hello[i];

                }
              } //Crazy code ends to tell us what the user clicked

              a.push($(this).html());
              if (a.length == 9) {
                $(".yo").html("<input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
              } //Game Over

              if (randomInitialOutput == ".1") {
                $(".1").off("click");
                $(".1").removeClass("1");
                if ((ranTwo == 0) && (ranThree == 0) && (ranFour == 0) && (ranFive == 0) && (ranSix == 0) && (ranSeven == 0) && (ranEight == 0) && (ranNine == 0)) {
                  switch (userclicked) {
                    case ".2":
                      ranTwo++;
                      $(".7").html(output);
                      $(".7").off("click");
                      $(".7").removeClass("7");
                      $(".2").off("click");
                      $(".2").removeClass("2");
                      break;
                    case ".3":
                      ranThree++;
                      $(".7").html(output);
                      $(".7").off("click");
                      $(".7").removeClass("7");
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      break;
                    case ".4":
                      ranFour++;
                      $(".5").html(output);
                      $(".5").off("click");
                      $(".5").removeClass("5");
                      $(".4").off("click");
                      $(".4").removeClass("4");
                      break;
                    case ".5":
                      ranFive++;
                      $(".9").html(output);
                      $(".9").off("click");
                      $(".9").removeClass("9");
                      $(".5").off("click");
                      $(".5").removeClass("5");
                      break;
                    case ".6":
                      ranSix++;
                      $(".3").html(output);
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      $(".6").off("click");
                      $(".6").removeClass("6");
                      break;
                    case ".7":
                      ranSeven++;
                      $(".3").html(output);
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      $(".7").off("click");
                      $(".7").removeClass("7");
                      break;
                    case ".8":
                      ranEight++;
                      $(".3").html(output);
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      $(".8").off("click");
                      $(".8").removeClass("8");
                      break;
                    case ".9":
                      ranNine++;
                      $(".3").html(output);
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      $(".9").off("click");
                      $(".9").removeClass("9");
                      break;
                  }
                } //if

                if ((ranTwo == 1) && (userclicked == ".4")) {
                  $(".5").html(output);
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  ranTwo = 2;
                } else if ((ranTwo == 2) && (userclicked == ".3")) {
                  $(".9").html(output); //comp won
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranTwo == 2) && (userclicked == ".9")) {
                  $(".3").html(output); //comp  won
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }
                if ((ranThree == 1) && (userclicked == ".4")) {
                  $(".9").html(output);
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  ranThree = 2;
                } else if ((ranThree == 2) && (userclicked == ".5")) {
                  $(".8").html(output); //comp won
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranThree == 2) && (userclicked == ".8")) {
                  $(".5").html(output); //comp won
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranFour == 1) && (userclicked == ".9")) {
                  $(".3").html(output);
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  ranFour = 2;
                } else if ((ranFour == 2) && (userclicked == ".2")) {
                  $(".7").html(output); //comp won
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranFour == 2) && (userclicked == ".7")) {
                  $(".2").html(output); //comp won
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranFive == 1) && (userclicked == ".7")) {
                  $(".3").html(output);
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  ranFive = 2;
                } else if ((ranFive == 2) && (userclicked == ".2")) {
                  $(".6").html(output); //comp won
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranFive == 2) && (userclicked == ".6")) {
                  $(".2").html(output); //comp won
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranSix == 1) && (userclicked == ".2")) {
                  $(".7").html(output);
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  ranSix = 2;
                } else if ((ranSix == 2) && (userclicked == ".4")) {
                  $(".5").html(output); //comp won
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSix == 2) && (userclicked == ".5")) {
                  $(".4").html(output); //comp won
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranSeven == 1) && (userclicked == ".2")) {
                  $(".5").html(output);
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  ranSeven = 2;
                } else if ((ranSeven == 2) && (userclicked == ".9")) {
                  $(".8").html(output);
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  ranSeven = 3;
                } else if ((ranSeven == 3) && (userclicked == ".6")) {
                  $(".4").html(output); //tie
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".yo").html("<h1>Tie</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSeven == 3) && (userclicked == ".4")) {
                  $(".6").html(output); //tie
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Tie</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranEight == 1) && (userclicked == ".2")) {
                  $(".5").html(output);
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  ranEight = 2;
                } else if ((ranEight == 2) && (userclicked == ".9")) {
                  $(".7").html(output); //comp won
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranEight == 2) && (userclicked == ".7")) {
                  $(".9").html(output); //comp won
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranNine == 1) && (userclicked == ".2")) {
                  $(".7").html(output);
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  ranNine = 2;
                } else if ((ranNine == 2) && (userclicked == ".4")) {
                  $(".5").html(output); //comp won
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranNine == 2) && (userclicked == ".5")) {
                  $(".4").html(output); //comp won
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".5").off("click");
                  $(".5").removeClass("5");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

              } // randomInitialOutput==".1"
              else if (randomInitialOutput == ".5") {
                $(".5").off("click");
                $(".5").removeClass("5");
                if ((ranTwo == 0) && (ranThree == 0) && (ranFour == 0) && (ranOne == 0) && (ranSix == 0) && (ranSeven == 0) && (ranEight == 0) && (ranNine == 0)) {

                  switch (userclicked) {
                    case ".1":
                      ranOne++;
                      $(".9").html(output);
                      $(".9").off("click");
                      $(".9").removeClass("9");
                      $(".1").off("click");
                      $(".1").removeClass("1");
                      break;
                    case ".2":
                      ranTwo++;
                      $(".7").html(output);
                      $(".7").off("click");
                      $(".7").removeClass("7");
                      $(".2").off("click");
                      $(".2").removeClass("2");
                      break;
                    case ".3":
                      ranThree++;
                      $(".7").html(output);
                      $(".7").off("click");
                      $(".7").removeClass("7");
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      break;
                    case ".4":
                      ranFour++;
                      $(".9").html(output);
                      $(".9").off("click");
                      $(".9").removeClass("9");
                      $(".4").off("click");
                      $(".4").removeClass("4");
                      break;
                    case ".6":
                      ranSix++;
                      $(".1").html(output);
                      $(".1").off("click");
                      $(".1").removeClass("1");
                      $(".6").off("click");
                      $(".6").removeClass("6");
                      break; //case 6 break
                    case ".7":
                      ranSeven++;
                      $(".3").html(output);
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      $(".7").off("click");
                      $(".7").removeClass("7");
                      break; //case 7 break
                    case ".8":
                      ranEight++;
                      $(".3").html(output);
                      $(".3").off("click");
                      $(".3").removeClass("3");
                      $(".8").off("click");
                      $(".8").removeClass("8");
                      break;
                    case ".9":
                      ranNine++;
                      $(".1").html(output);
                      $(".1").off("click");
                      $(".1").removeClass("1");
                      $(".9").off("click");
                      $(".9").removeClass("9");
                      break;
                  }
                } //if

                if ((ranTwo == 1) && (userclicked == ".3")) {
                  $(".1").html(output);
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  ranTwo = 2;
                } else if ((ranTwo == 2) && (userclicked == ".9")) {
                  $(".4").html(output); //comp won
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranTwo == 2) && (userclicked == ".4")) {
                  $(".9").html(output); //comp  won
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranThree == 1) && (userclicked == ".2")) {
                  $(".1").html(output);
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  ranThree = 2;
                } else if ((ranThree == 2) && (userclicked == ".4")) {
                  $(".9").html(output); //comp won
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranThree == 2) && (userclicked == ".9")) {
                  $(".4").html(output); //comp won
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranFour == 1) && (userclicked == ".1")) {
                  $(".7").html(output);
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  ranFour = 2;
                } else if ((ranFour == 2) && (userclicked == ".8")) {
                  $(".3").html(output); //comp won
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranFour == 2) && (userclicked == ".3")) {
                  $(".8").html(output); //comp won
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranOne == 1) && (userclicked == ".4")) {
                  $(".7").html(output);
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  ranOne = 2;
                } else if ((ranOne == 2) && (userclicked == ".8")) {
                  $(".3").html(output); //comp won
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranOne == 2) && (userclicked == ".3")) {
                  $(".8").html(output); //comp won
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranSix == 1) && (userclicked == ".9")) {
                  $(".3").html(output);
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  ranSix = 2;
                } else if ((ranSix == 2) && (userclicked == ".2")) {
                  $(".7").html(output); //comp won
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSix == 2) && (userclicked == ".7")) {
                  $(".2").html(output); //comp won
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

                if ((ranSeven == 1) && (userclicked == ".4")) {
                  $(".1").html(output);
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  ranSeven = 2;
                } else if ((ranSeven == 1) && (userclicked == ".1")) {
                  $(".4").html(output);
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  ranSeven = 2;
                } else if ((ranSeven == 2) && (userclicked = ".6")) {
                  $(".2").html(output);
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  ranSeven = 4;
                } else if ((ranSeven == 4) && (userclicked == ".8")) {
                  $(".9").html(output); //tie
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Tie</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSeven == 2) && (userclicked == ".2")) {
                  $(".9").html(output); //comp won
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $("2").off("click");
                  $(".2").removeClass("2");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSeven == 2) && (userclicked == ".9")) {
                  $(".2").html(output); //comp won
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSeven == 1) && (userclicked == ".6")) {
                  $(".9").html(output);
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  ranSeven = 2;
                } else if ((ranSeven == 2) && (userclicked == ".1")) {
                  $(".2").html(output);
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  ranSeven = 3;
                } else if ((ranSeven == 3) && (userclicked == ".8")) {
                  $(".4").html(output); //tie
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Tie</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranSeven == 3) && (userclicked == ".4")) {
                  $(".8").html(output); //tie
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Tie</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } //ranSeven

                if ((ranEight == 1) && (userclicked == ".7")) {
                  $(".9").html(output);
                  $(".9").off("click");
                  $(".9").removeClass("9");
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  ranEight = 2;
                } else if ((ranEight == 2) && (userclicked == ".1")) {
                  $(".6").html(output); //comp won
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranEight == 2) && (userclicked == ".6")) {
                  $(".1").html(output); //comp won
                  $(".1").off("click");
                  $(".1").removeClass("1");
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } //ranEight

                if ((ranNine == 1) && (userclicked == ".2")) {
                  $(".7").html(output);
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  ranNine = 2;
                } else if ((ranNine == 2) && (userclicked == ".4")) {
                  $(".3").html(output); //comp won
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranNine == 2) && (userclicked == ".3")) {
                  $(".4").html(output); //comp won
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranNine == 1) && (userclicked == ".3")) {
                  $(".6").html(output);
                  $(".6").off("click");
                  $(".6").removeClass("6");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  ranNine = 2;
                } else if ((ranNine == 2) && (userclicked == ".4")) {
                  $(".2").html(output);
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  ranNine = 3;
                } else if ((ranNine == 3) && (userclicked == ".8")) {
                  $(".7").html(output); //tie
                  $(".7").off("click");
                  $(".7").removeClass("7");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Tie</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranNine == 1) && (userclicked == ".4")) {
                  $(".2").html(output);
                  $(".2").off("click");
                  $(".2").removeClass("2");
                  $(".4").off("click");
                  $(".4").removeClass("4");
                  ranNine = 4;
                } else if ((ranNine == 4) && (userclicked == ".3")) {
                  $(".8").html(output); //comp won
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                } else if ((ranNine == 4) && (userclicked == ".8")) {
                  $(".3").html(output); //comp won
                  $(".3").off("click");
                  $(".3").removeClass("3");
                  $(".8").off("click");
                  $(".8").removeClass("8");
                  $(".yo").html("<h1>Computer Won</h1><input type='button' id='play' value='Play Again' onClick='history.go(0)'>");
                }

              } //randomInitialOutput =".5"
              else if (randomInitialOutput == ".7") {

              } else if (randomInitialOutput == ".3") {

              } else if (randomInitialOutput == ".9") {

              }

            }); //Ending bracket of userclick case O
          } //callback
      } //main
    } //buttons
  }); //BootBoxDialogue

}); //document ready function
