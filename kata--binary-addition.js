function addBinary(a,b) 
{
  console.log(a+", "+b)
  let result = (a+b).toString(2);
  return result
}

console.log(addBinary(1,2));