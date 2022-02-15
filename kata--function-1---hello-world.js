function greet()
// https://www.codewars.com/kata/523b4ff7adca849afe000035/train/javascript
{
  let response = [];
  let firstLetter = "h";
  let secondLetter = "e";
  let thirdLetter = "l";
  let fifthLetter = "o";
  let sixthLetter = "w";
  let seventhLetter = "r";
  let eighthLetter = "d";
  response.push(firstLetter, secondLetter, thirdLetter, thirdLetter, fifthLetter, " ", sixthLetter, fifthLetter, seventhLetter, thirdLetter, eighthLetter, "!");
  response = response.join("");
  return response;
}