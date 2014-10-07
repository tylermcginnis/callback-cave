/***TYLERS SOLUTION ***/
var fn = function(parent, child){
  var anagrams = function(str){
    if(str.length < 2){
      return [str]
    } else {
    var answers = [];
    for(var i = 0; i < str.length; i++){
      var letter = str[i];
      var shortWord = str.substr(0,i) + str.substr(i+1, str.length -1);
      var wordArr = anagrams(shortWord);
      for(var j = 0; j < wordArr.length; j++){
        answers.push(letter + wordArr[j]);
      }
    }
      return answers;
   }
  }
  var arrOfAnagrams = anagrams(child);
  var count = 0;
  for(var i = 0; i < arrOfAnagrams.length; i++){
    if(parent.indexOf(arrOfAnagrams[i]) !== -1){
      count++;
    }
  }
  return count;
}

/** JAKE'S SOLUTION **/


/** EAN's SOLUTION **/

/** PAUL'S SOLUTION **/