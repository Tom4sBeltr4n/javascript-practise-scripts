function SeriesSum(n)
{
  // https://www.codewars.com/kata/555eded1ad94b00403000071/train/javascript
  console.log("Argument: " + n);
  let i;
  let result = i = 0;
  for(;n>0;n--)
  {
    result+=1/(1+(3*(n-1)));
    i++
  }
  result = (Math.round(result*100)/100).toString();
  if(Number.isInteger(parseFloat(result)))
  {
    result += ".00";
  } else if (result.length == 3)
  {
    result+= "0";
  };
  return result;
}

console.log("Result of n = 0: "+SeriesSum(0));
console.log("Result of n = 1: "+SeriesSum(1));
console.log("Result of n = 4: "+SeriesSum(58));