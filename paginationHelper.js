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

class PaginationHelper {
  constructor(values, num) {
    this.results = values;
    this.results_per_page = num;
    this.total_results = this.results.length;
    this.total_pages = Math.ceil(this.total_results / this.results_per_page);
  }

  pageCount() {
    return this.total_pages;
  }

  itemCount() {
    return this.total_results;
  }

  pageItemCount(index) {
    if (index < this.total_pages - 1) {
      return this.results_per_page;
    } else if (index === this.total_pages - 1) {
      return this.total_results % this.results_per_page;
    } else {
      return -1;
    }
  }

  pageIndex(index) {
    if (index >= 0 && index < this.total_results) {
      return Math.floor(index / this.results_per_page);
    } else {
      return -1;
    }
  }
}

// Various ways to implement similar solution, minimized
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
