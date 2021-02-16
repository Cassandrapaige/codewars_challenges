/* ----------------------
    CODEWARS CHALLENGE
---------------------- */

/* 
Complete the method/function so that it converts dash/underscore 
delimited words into camel casing. The first word within the 
output should be capitalized only if the original word was 
capitalized (known as Upper Camel Case, also often referred to 
as Pascal case). 
*/

/* ----------------------    
        SOLUTION
---------------------- */

const snakeToCamel = (name) => {
  let char = name.includes("_") ? "_" : "-";
  let arr = name.split(char);
  let result = arr[0];
  for (let i = 1; i < arr.length; i++) {
    result += arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }
  return result;
};

console.log(snakeToCamel("the_time_is_now"));
