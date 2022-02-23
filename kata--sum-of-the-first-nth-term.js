function SeriesSum(n)
{
  // https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
  console.log("Argument: " + n);
  let i;
  let result = i = 0;
  for(;n>0;n--)
  {
    result+=1/(1+(3*(n-1)));
    i++;
  };
  result = result.toFixed(2).toString();
  return result;
}

console.log("Result of n = 0: "+SeriesSum(0));
console.log("Result of n = 1: "+SeriesSum(1));
console.log("Result of n = 4: "+SeriesSum(58));