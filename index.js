function isPalindrome(word) {
  // Write your algorithm here

  //Need to iterate from middle to beginning
  for(let i = 0; i < word.length; i++){
    const j = word.length - 1 - i;
   
    if(word[i] !== word[j]) return false
  }
  return true
}

/* 
  Add your pseudocode here
  If the first letter is the same as last letter
  And second letter is the same as the second last letter etc untill we get to the middle

  check each letter to the corresponding letter from the end
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
