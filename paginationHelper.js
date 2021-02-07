/* ----------------------
    CODEWARS CHALLENGE
---------------------- */

/*
For this exercise you will be strengthening your page-fu mastery.
You will complete the PaginationHelper class, which is a utility
class helpful for querying paging information related to an array.

The class is designed to take in an array of values and an integer
indicating how many items will be allowed per each page. The types
of values contained within the collection/array are not relevant.
*/

/* ----------------------    
        SOLUTION
---------------------- */

// class declaration
class PaginationHelper {
  constructor(collection, itemsPerPage) {
    this.collection = collection;
    this.itemsPerPage = itemsPerPage;
  }

  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  }

  itemCount() {
    return this.collection.length;
  }
}

const helper = new PaginationHelper(collectionArray, 4);

// constructor function
function PaginationHelper(collection, itemsPerPage) {
  this.collection = collection;
  this.itemsPerPage = itemsPerPage;
}

PaginationHelper.prototype.pageCount = function () {
  return Math.ceil(this.collection.length / this.itemsPerPage);
};

PaginationHelper.prototype.itemCount = function () {
  return this.collection.length;
};

const helper = new PaginationHelper(collectionArray, 4);

// factory function
const PaginationHelper = {
  pageCount() {
    return Math.ceil(this.collection.length / this.itemsPerPage);
  },
  itemCount() {
    return this.collection.length;
  },
};

const helper = Object.create(PaginationHelper);
helper.collection = collectionArray;
helper.itemsPerPage = 3;

// function expression
const PaginationHelper = (collection, itemsPerPage) => {
  const pageCount = () => Math.ceil(collection.length / itemsPerPage);
  const itemCount = () => collection.length;

  return {
    collection,
    itemsPerPage,
    pageCount,
    itemCount,
  };
};

const helper = PaginationHelper(collectionArray, 4);
