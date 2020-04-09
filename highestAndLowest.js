/* ----------------------
    CODEWARS CHALLENGE
---------------------- */

/* In this little assignment you are given a string of space separated numbers, 
and have to return the highest and lowest number.

Example: highAndLow("1 2 -3 4 5"); // return "5 -3"

Notes:

All numbers are valid Int32, no need to validate them.
There will always be at least one number in the input string.
Output string must be two numbers separated by a single space, 
and highest number is first. */

/* ----------------------    
        SOLUTION
---------------------- */

const highAndLow = numbers => {
    const numArr = Array.from(numbers.split(' '))
    return`${Math.max(...numArr)} ${Math.min(...numArr)}`
}