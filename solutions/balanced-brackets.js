/* Tylers Solutions */
//* First Iterative Solution *//
var balancedBracket = function(str){
  var obj = {};
  for(var i = 0; i < str.length; i++){
    if(obj[str[i]]){
      obj[str[i]]++
    } else {
      obj[str[i]] = 1;
    }
  }

  for(var key in obj){
    if(obj[key] % 2 !== 0){
      return false;
    }
  }
  return true;
}