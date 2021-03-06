/*
We are given 3 strings: str1, str2, and str3. Str3 is said to be a shuffle of str1 and str2 
if it can be formed by interleaving the characters of str1 and str2 in a way that maintains the 
left to right ordering of the characters from each string. For example, given str1="abc" and str2="def", 
str3="dabecf" is a valid shuffle since it preserves the character ordering of the two strings. So, given 
these 3 strings write a function that detects whether str3 is a valid shuffle of str1 and str2.
*/

//Tylers solution
var withIndexOf = function(str1, str2, str3){
  var first = '';
  var second = '';
  
  for(var i = 0; i < str3.length; i++){
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
withIndexOf('abcdefghijklmno', 'pqrstuvwxyz', 'abpqcdrefgstuhijklvwmxnyzo')


//Tyler Other solution creating a map object.
var withObj = function(str1, str2, str3){
  var first = '';
  var second = '';

  var str1Map = {};
  for(var i = 0; i < str1.length; i++){
    str1Map[str1[i]] = true;
  }
  
  for(var i = 0; i < str3.length; i++){
    if(str3[i] in str1Map){
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
};
withObj('abcdefghijklmno', 'pqrstuvwxyz', 'abpqcdrefgstuhijklvwmxnyzo');

//According to JS perf, withObj is 80% slower than withIndexOf (http://jsperf.com/objindexof)

var theirSolution = function (str1, str2, combined) {
  // Generate all the posible paths between `str1` and `str2`
  var paths = {};

  // Check the string lengths are the same to begin
  if ((str1 + str2).length !== combined.length) {
    return false;
  }

  // Finding paths is essentially the anagrams solution
  (function findPath (str1, str2, path) {
    if (path.length === combined.length) { return paths[path] = true; }

    // Find the next path from the first character of either strings
    str1 && findPath(str1.substr(1), str2, path + str1.substr(0, 1));
    str2 && findPath(str1, str2.substr(1), path + str2.substr(0, 1));
  })(str1, str2, '');

  return combined in paths;
};

theirSolution('abcdefghijklmno', 'pqrstuvwxyz', 'abpqcdrefgstuhijklvwmxnyzo');