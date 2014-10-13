/*
We are given 3 strings: str1, str2, and str3. Str3 is said to be a shuffle of str1 and str2 
if it can be formed by interleaving the characters of str1 and str2 in a way that maintains the 
left to right ordering of the characters from each string. For example, given str1="abc" and str2="def", 
str3="dabecf" is a valid shuffle since it preserves the character ordering of the two strings. So, given 
these 3 strings write a function that detects whether str3 is a valid shuffle of str1 and str2.
*/

//Tylers solution
var strChecker = function(str1, str2, str3){
  var first = '';
  var second = '';
  
  for(var i = 0; i < str3.length; i++){
    //n^2 time I believe. Gross.
    if(str1.indexOf(str3[i]) !== -1){
      first += str3[i];
    } else {
      second += str3[i];
    }
  }
  
  if(first === str1 && second === str2){
    return true;
  } else {
    return false;
  }
}

strChecker('abc', 'def', 'dabecf')

//end tylers solution