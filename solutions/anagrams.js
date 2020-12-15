function isAnagram(firstString, secondString) {
  let first = firstString.toLowerCase();
  let second = secondString.toLowerCase();

  // split method turns string to an array
  // sort method alphabetizes the array
  // join method turns the array back into a string
  first = first.split("").sort().join("");
  second = second.split("").sort().join("");

  if (first === second) {
    console.log(true)
  } else {
    console.log(false)
  }
}

isAnagram("listen", "silent"); 
