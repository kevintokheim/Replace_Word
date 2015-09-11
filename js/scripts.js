var inputString = function(string) {

  var userString = string;

  return userString;

};


var wordFinder = function(string, word) {

  var userString = string;

  var userWord = word;

  for (var i = 0; i < userString.length; i++) {
    var wordSearch = string.search(userWord);
    return userWord;
  }

}


var wordReplacer = function(string, word, replacement) {

  var wordReplace = string.replace(word, replacement);

  return wordReplace;

};
