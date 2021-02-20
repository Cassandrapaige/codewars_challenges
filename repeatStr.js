/* ----------------------
    CODEWARS CHALLENGE
---------------------- */

/* 
Write a function called repeat_str which repeats the given 
string src exactly count times.
*/

/* ----------------------    
        SOLUTION
---------------------- */

function repeatStr(num, str) {
  // return str.repeat(num);
  if (num >= 1) {
    str += repeatStr(num - 1, str);
    return str;
  }
  return "";
}

repeatStr(3, "#");
