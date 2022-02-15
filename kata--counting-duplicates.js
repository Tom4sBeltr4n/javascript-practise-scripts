function duplicateCount(text)
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
{
  text = [...text];
  let result = 0;
  let done = -1;

  for(i in text)
  {
    for(let j = parseInt(i) + 1; j< text.length; j++)
    {
      if(typeof(text[i]) == "string")
      {
        if(text[i].toLowerCase() == text[j].toLowerCase())
        {
          if(text[done] != undefined && text[done] == text[i])
          {
            if(text[j].toLowerCase() == text[done].toLowerCase())
            {
              text.splice(j, 1);
              j--;
            }
          } else {
            done = i;
            result++;
            text.splice(j, 1);
            j--;
          };
        };
      } else if(typeof(text[i]) == "number") {
          if(text[i] == text[j])
          {
            if(text[j] == text[done])
            {
              text.splice(j, 1);
              j--;
            } else {
              done = i;
              result++;
              text.splice(j, 1);
              j--;
            };
          };
      };
    };
  };
  return result;
};

console.log("ANSWER", duplicateCount("abcdefghijklmnopqrstuvwxyzbaaAAB"));  
