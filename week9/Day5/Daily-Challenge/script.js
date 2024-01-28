// Daily Challenge: Anagram
// nstructions
// Create a function that:

//- takes in two strings as two parameters
//- and returns a boolean that indicates whether or not the first string is an anagram of the second string.

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase().replace(/\s/g, ''); // Remove spaces and make lowercase
    str2 = str2.toLowerCase().replace(/\s/g, '');
  
    if (str1.length !== str2.length) {
      return false;
    }
  
    const charCounts = {};
    for (let i = 0; i < str1.length; i++) {
      const char = str1[i];
      charCounts[char] = (charCounts[char] || 0) + 1;
      charCounts[str2[i]] = (charCounts[str2[i]] || 0) - 1;
    }
  
    return Object.values(charCounts).every(count => count === 0);
  }

  console.log(isAnagram('Astronomer', 'Moon starer'));  // true
  console.log(isAnagram('Astronomer', 'Moon star')); // false