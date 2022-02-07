function positiveSum(arr) {
  console.log(arr); 
  arr = arr.filter((w)=>w>0)
  let result = 0;
  for(i of arr)
  {
    result +=i;
  }
  return result;
}

console.log(positiveSum([1,2,3,4,5]),"Expected: 15");
console.log(positiveSum([1,-2,3,4,5]),"Expected: 13");
console.log(positiveSum([]),"Expected: 0");
console.log(positiveSum([-1,-2,-3,-4,-5]),"Expected: 0");
console.log(positiveSum([-1,2,3,4,-5]),"Expected: 9");