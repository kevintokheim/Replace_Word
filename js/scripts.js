//Program Logic

//Returns the user's string
var inputString = function(string) {

  var userString = string;

  return userString;

};

//Finds a specified word within the user's string
var wordFinder = function(string, word) {

  var userString = string;

  var userWord = word;

  for (var i = 0; i < userString.length; i++) {
    var wordSearch = string.search(userWord);
    return userWord;
  }

};

//Finds a specified word with the user's string and
//replaces it with another specified word.
var wordReplacer = function(string, word, replacement) {

  var wordReplace = string.replace(word, replacement);

  return wordReplace;

};



//Interface Logic

$(document).ready(function(){

    $("form#inputString").submit(function(event){

        var string = $("input#string").val();
        var stringResult = inputString(string);
        $('.string').text(stringResult);

        $("#userString").show();
        event.preventDefault();

    });

    $("form#inputWord").submit(function(event){

        var word = $("input#word").val();
        var wordResult = wordFinder(inputString, word);
        $(".word").text(wordResult);

        $("#userWord").show();
        event.preventDefault();

    });

    $("form#wordReplacement").submit(function(event){

        var replacement = $("input#replacement").val();
        var replacementResult = wordReplacer(inputString, inputWord, replacement);
        $(".replacement").text(replacementResult);

        $("userReplacement").show();
        event.preventDefault();

    });

    // $("form#wordReplacement").submit(function(event){
    //
    //     var string = $("input#string").val();
    //     var word = $("input#word").val();
    //     var replacement = $("input#replacement").val();
    //
    //     var result = wordReplacement(string, word, replacement);
    //
    //     $(".string").text(string);
    //     $(".word").text(word);
    //     $(".replacement").text(replacement);
    //
    // });
});
