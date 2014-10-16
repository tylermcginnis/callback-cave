/*
There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array 
and deleting a random element. Given these two arrays, find which element is missing in the second array.
*/

var missingElement = function(arr1, arr2){
  arr2.sort();
  for(var i = 0; i < arr1.length; i++){
    if(arr1[i] !== arr2[i]){
      return arr1[i];
    }
  }
}