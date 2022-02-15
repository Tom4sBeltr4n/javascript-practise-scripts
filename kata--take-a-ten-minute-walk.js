function isValidWalk(walk) {
  //link: https://www.codewars.com/kata/54da539698b8a2ad76000228
  console.log(walk); //in case something goes wrong, we'll know which argument made it so
  //Kata description: You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
  if(walk.length == 10)
  {
    walk = walk.sort();
    let n, s, w, e;
    n = s = w = e = 0;
    console.log(n, s, w, e);
    for(i in walk)
    {
      switch(walk[i])
      {
        case "n":
          n++
          break;
        case "e":
          e++
          break;
        case "w":
          w++
          break;
        case "s":
          s++
          break;
        default:
          return false;
      }
    }
    console.log(n, s, w, e);
    if(n === s && e === w)
    {
      return true;
    } else {
      return false;
    };
  } else {
    return false;
  }
}

//Tests: 

console.log("Argument: " + ['n','s','n','s','n','s','n','s','n','s'] + "\n Returned: " + isValidWalk(['n','s','n','s','n','s','n','s','n','s'])+ "\nExpected: " + "true");
console.log("Argument: " + ['w','e','w','e','w','e','w','e','w','e','w','e'] + "\n Returned: " + isValidWalk(['w','e','w','e','w','e','w','e','w','e','w','e'])+ "\nExpected: " + "false");
console.log("Argument: " + ['w'] + "\n Returned: " + isValidWalk(['w'])+ "\nExpected: " + "false");
console.log("Argument: " + ['n','n','n','s','n','s','n','s','n','s'] + "\n Returned: " + isValidWalk(['n','n','n','s','n','s','n','s','n','s'])+ "\nExpected: " + "false");