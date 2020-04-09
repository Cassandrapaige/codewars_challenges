/* ----------------------
    CODEWARS CHALLENGE
---------------------- */

/* TASK

Given a list lst and a number N, create a new list that contains 
each number of lst at most N times without reordering. For example if 
N = 2, and the input is [1,2,3,1,2,1,2,3], you take [1,2,3,1,2], 
drop the next [1,2] since this would lead to 1 and 2 being in the result 
3 times, and then take 3, which leads to [1,2,3,1,2,3]. */

/* ----------------------    
        SOLUTION
---------------------- */

const deleteNth = (array, num) => {
    let count = {}; 
    let filteredArray= [];
      array.map((el, i) => {
         count[array[i]] = (count[array[i]] || 0) + 1;
          if(count[array[i]] <= num) {
            filteredArray.push(array[i])
          }
      })
      return filteredArray
    }

/* ----------------------
       REFACTORED
---------------------- */

const deleteNth = (array, num) => {
    let count = {};
    return array.filter(x => (
        count[x] = (count[x] || 0) + 1,
        count[x] <= num
    ));
}