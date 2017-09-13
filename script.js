// Code goes here

/*
function basicOp(operation, value1, value2)
{
  if (operation === '+'){
    compute = value1 + value2;
    return compute;
}else if(operation === '-'){
    compute = value1 - value2;
    return compute;
}else if(operation === '-'){
    compute = value1 - value2;
    return compute;
}else if(operation === '*'){
    compute = value1 * value2;
    return compute;
}else if(operation === '/'){
    compute = value1 / value2;
    return compute;
}
}

//replace digits below 5 with 0 and above with 1
function fakeBin(xd){
//separate the numbers into array
var res = xd.split('');
for (i=0;i<res.length;i++){
parseInt(res[i]);
return res;
}
for (i=0;i<res.length;i++){
  if (res[i] <5){
    res[i]=0;
    return res;
  }else{
    res[i]=1;
    return res;
  }
}

//check if it is below 5, change to 0 and if above change to 1
}
*/



function changeValue(x){
  if (x>0){
    y= x*-1;
    return y;
  }else {
    return 0;
  }
}

function changeToNegative(num){
  return -Math.abs(num);
}



//calculate averages

function find_average(array) {
 // debugger;
  var sum= 0;
  len= array.length;
  for (i=0;i<len;i++){
    sum=sum + array[i];
  }
var average = sum/len;
return average;
  //average = sum of all / lengh
  //return 0;
}



//two arrays arr1 and arr2, where arr2 always contains integers.
///arr1 is list of array to query 
///arr2 contains positions to display 
//eg arr1 = ['a', 'a', 'a', 'a', 'a'], arr2 = [2, 4] find_array returns ['a', 'a']
//arr1 = [0, 1, 5, 2, 1, 8, 9, 1, 5], arr2 = [1, 4, 7] find_array returns [1, 1, 1]
//find_array(arr1, arr2)

// find_array([0, 1, 5, 2, 1, 8, 9, 1, 5], [1, 4, 7]) returns [1, 1, 1]

function find_array(arr1, arr2){
  debugger;
   var newArray=[];
  //find the values of arr2 in arr1 postions
  for (i=0;i<arr2.length;i++){
    //position value
    var position =arr2[i];
    value = arr1[position]
    newArray.push(value);
  }
  for(i=0;i<newArray.length;i++){
    if (newArray[i] === undefined){
      newArray.splice(i,1);
    }
  }
  return newArray;
  }



