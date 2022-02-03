function alphabetPosition(text) {
  console.log(text);

  let funnel = new RegExp('[A-Z]|[a-z]')
  let alphabet =
  [
  "", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ]
  text = [...text];
  let texte = text.filter(t=>{funnel.test(t)});
  console.log(funnel.test("a"));
  let result = ``;
  for(i in text)
  {
    if(typeof(text[i]) == "String")
    {
      let cipher = alphabet.indexOf(text[i].toLowerCase());
      result+= 1;
    }
  }
  return result;
}

console.log("RESULT: " + alphabetPosition("arg"));