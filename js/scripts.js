//Program Logic

//Finds a specified word with the user's string and
//replaces it with another specified word.
var wordReplacer = function(string, word, replacement) {

    var string = string.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    var word = word.toLowerCase().replace(/[^a-zA-Z ]/g, "");
    var wordFind = new RegExp(word, "g");

    var wordReplace = string.replace(wordFind, replacement);

    return wordReplace;
};

//Interface Logic

$(document).ready(function() {

    $("form#wordReplacement").submit(function(event) {
        var sentence = $("input#string").val();
        var foundWord = $("input#word").val();
        var wordAlt = $("input#replacement").val();

        var result = wordReplacer(sentence, foundWord, wordAlt);

        $("#userString").text(sentence).show();
        $("#userWord").text(foundWord).show();
        $("#userReplacement").text(wordAlt).show();
        $("#newSentence").text(result).show();
        event.preventDefault();

    });
});
