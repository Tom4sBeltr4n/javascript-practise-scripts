function addBinary(a,b) 
{//link: https://www.codewars.com/kata/551f37452ff852b7bd000139
  console.log(a+", "+b)
  let result = (a+b).toString(2);
  return result
}

console.log(addBinary(1,2));