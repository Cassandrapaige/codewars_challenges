/* ----------------------
    CODEWARS CHALLENGE
---------------------- */

/* In this kata you will create a function that takes a list of non-negative 
integers and strings and returns a new list with the strings filtered out. 

EXAMPLE: filter_list([1,2,'a','b']) == [1,2] */

/* ----------------------    
        SOLUTION
---------------------- */

const filter_list = array => {
    let result = []
    array.map(el => {
      if(typeof el === 'number') 
      result.push(el)
    })
    return result
  }