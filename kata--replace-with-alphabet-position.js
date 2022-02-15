function alphabetPosition(text) {
  // https://www.codewars.com/kata/546f922b54af40e1e90001da/train/javascript
  console.log(text);
  text = [...text];
  let alphabet =
  [
    null, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
  ];
  function belongsToAlphabet(a)
  {
    for(i in alphabet)
    {
      if(alphabet[i] == a.toLowerCase())
      {
        return true;
      };
    };
    return false;
  };
  text = text.filter(belongsToAlphabet);
  let result = [];
  for(i in text)
  {
    let cipher = alphabet.indexOf(text[i].toLowerCase());
    result.push(cipher.toString());
  }
  result = result.join(' ');
  return result;
}

console.log("RESULT: " + alphabetPosition("The narwhal bacons at midnight"));