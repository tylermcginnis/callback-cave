var flatten = function(arr, newArr){
  if(arr.length < 2){
    newArr.push(arr[0]);
    return;
  }

  newArr = newArr || [];
  for(var i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      flatten(arr[i], newArr);
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}