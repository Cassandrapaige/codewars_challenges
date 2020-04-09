/* ----------------------
    CODEWARS CHALLENGE
---------------------- */

/* Return the number (count) of vowels in the given string.
We will consider a, e, i, o, and u as vowels for this Kata.
The input string will only consist of lower case letters and/or spaces. */



/* ----------------------    
        SOLUTION
---------------------- */

const getCount = string => {
    const vowels = "aeiou".split("")  
    let vowelsCount = 0
     for(let i = 0; i < string.length; i++) {
       for(let e = 0; e < vowels.length; e ++) {
          if(string[i] === vowels[e]) {
            vowelsCount += 1
          }
       }
      }
      return vowelsCount
    }