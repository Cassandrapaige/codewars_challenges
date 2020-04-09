/* ----------------------
    CODEWARS CHALLENGE
---------------------- */

/* TASK

Your task is to write a function which returns the sum of following series upto nth term(parameter).
Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 +...

RULES
You need to round the answer to 2 decimal places and return it as String.
If the given value is 0 then it should return 0.00

You will only be given Natural Numbers as arguments.

Example: SeriesSum(2) => 1 + 1/4 = "1.25" */

/* ----------------------    
        SOLUTION
---------------------- */

const SeriesSum = nth => {
    let result = nth >= 1 ? 1 : 0;
    let baseNum = 1
      for(let i = 1; i < nth; i++) {
        baseNum = baseNum + 3
        result += 1 / baseNum
    }
    return parseFloat(result).toFixed(2);
    }