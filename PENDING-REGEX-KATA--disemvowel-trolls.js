function disemvowel(str) {
  console.log(str);
  str = [...str];
  str.filter((e)=>e=="b"||e=="c")
  return str;
}