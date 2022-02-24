function findEvenIndex(arr)
{
  // https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
  console.log("Argument: [" + arr + "]");
  let result = [];
  let rightSideSum;
  let leftSideSum = rightSideSum = 0;
  for(i in arr)
  {
    leftSideSum = arr.slice(0,i).reduce((p,c)=>p+c,0);
    rightSideSum = arr.slice(parseInt(i)+1).reduce((p,c)=>p+c,0);
    if(rightSideSum == leftSideSum)
    {
      result.push(i);
    } else {}
  };
  return result[0] !== undefined ? parseInt(result.sort((a,b)=>{a-b})[0]) : -1;
};

console.log("Result of arr = [1,2,3,4,3,2,1]: "+findEvenIndex([1,2,3,4,3,2,1]));
console.log("Result of arr = [1,100,50,-51,1,1]: "+findEvenIndex([1,100,50,-51,1,1]));
console.log("Result of arr = [20,10,-80,10,10,15,35]: "+findEvenIndex([20,10,-80,10,10,15,35]));
console.log("Result of arr = [1,2,3,4,5,6]: "+findEvenIndex([1,2,3,4,5,6]));
console.log("Result of arr = [20,10,30,10,10,15,35]: "+findEvenIndex([20,10,30,10,10,15,35]));