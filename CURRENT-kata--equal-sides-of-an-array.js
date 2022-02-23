function findEvenIndex(arr)
{
  // https://www.codewars.com/kata/5679aa472b8f57fb8c000047/train/javascript
  console.log("Argument: "+ arr);
  let result;
  let rightSideSum;
  let leftSideSum = rightSideSum = result = 0;
  for(i in arr)
  {
    console.log("Left-side array: ["+arr.slice(0,i)+"]\nSum: "+arr.slice(0,i).reduce((p,c)=>p+c,0));
    leftSideSum = arr.slice(0,i).reduce((p,c)=>p+c,0);
    console.log("Right-side array: ["+arr.slice(0,i)+"]\nSum: "+arr.slice(0,i).reduce((p,c)=>p+c,0));
    rightSideSum = arr.slice(0,i).reduce((p,c)=>p+c,0);
  };
};

console.log("Result of arr = [1,2,3,4,3,2,1]: "+findEvenIndex([1,2,3,4,3,2,1]));