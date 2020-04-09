
/* ----------------------
    CODEWARS CHALLENGE
---------------------- */

/* Your task is to make a function that can take any non-negative integer as a argument 
and return it with its digits in descending order. Essentially, rearrange the digits 
to create the highest possible number.

Example: Input: 21445 Output: 54421 */

/* ----------------------    
        SOLUTION
---------------------- */

function descendingOrder(n){
    let arr = n.toString().split('');
    let string = arr.sort().reverse();
    let result = string.toString().replace(/,/g,'');
    return Number(result)
  }


/* ----------------------    
        REFACTORED
---------------------- */

const descendingOrder = num => {
    return num
        .toString()
        .split('')
        .sort()
        .reverse()
        .toString()
        .replace(/,/g,'')
}