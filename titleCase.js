/* ----------------------
    CODEWARS CHALLENGE
---------------------- */

/* 
A string is considered to be in title case if each word in the 
string is either (a) capitalised (that is, only the first letter 
of the word is in upper case) or (b) considered to be an 
exception and put entirely into lower case unless it is the 
first word, which is always capitalised.
Write a function that will convert a string into title case, 
given an optional list of exceptions (minor words). The list of 
minor words will be given as a string with each word separated 
by a space. Your function should ignore the case of the minor 
words string -- it should behave in the same way even if the 
case of the minor word string is changed.
*/

/* ----------------------    
        SOLUTION
---------------------- */

function titleCase(str, words) {
  const splitString = str.split(" ");
  return splitString
    .map((str) => {
      words.split(" ").map((word, index) => {
        console.log(word);
      });
    })
    .join(" ");
}
console.log(titleCase(`The monkey is here`, `The is`));
