function disemvowel(str) {
  //link: https://www.codewars.com/kata/52fba66badcd10859f00097e/train/javascript
  console.log(str);
  str = [...str];
  str.filter((e)=>e=="b"||e=="c")
  return str;
}