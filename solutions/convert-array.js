/*
Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert 
it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN] in-place using constant extra space.
*/

//Tylers first solution 
var convertArray = function(arr){
  var obj = {};
  var results = [];
  for(var i = 0; i < arr.length; i++){
    if(obj[arr[i][1]]){
      obj[arr[i][1]].push(arr[i]);
    } else {
      obj[arr[i][1]] = [arr[i]];
    }
  }
    
  for(var key in obj){
    results = results.concat(obj[key])
  }

  return results;
};


convertArray(['a1','a2','a3','b1','b2','c1']);