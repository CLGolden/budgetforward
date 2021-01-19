/**
 * Model file for working with data
 */

/**
 * Main Model Object
 */
let model = {};

/**
  * Initialize the model object
  **/
model.init = function() {

  model.getBudgetItems();
  // model.clearLocalStorage();
  model.setInitialBudgetItems();
  // model.getCurrentBalance();
};

model.getCurrentBalance = function() {
  let currentBalEl = document.getElementById( 'currentBal' ),
      balance = 1000;

  currentBalEl.append( 'Current Balance: $ ' + balance );
};



/**
  * Sorts table by the payDate. A solution from stackOverflow
  * @param {type} var - description
  * @return {type} var - description
  **/
function convertDate(d) {
  var p = d.split("/");
  return +(p[2]+p[1]+p[0]);
}

function sortByDate() {
  var tbody = document.querySelector("#results tbody");
  // get trs as array for ease of use
  var rows = [].slice.call(tbody.querySelectorAll("tr"));
  
  rows.sort(function(a,b) {
    return convertDate(a.cells[0].innerHTML) - convertDate(b.cells[0].innerHTML);
  });
  
  rows.forEach(function(v) {
    tbody.appendChild(v); // note that .appendChild() *moves* elements
  });
}

// document.querySelector("button").addEventListener("click", sortByDate);


/**
  * Get Budget Items from local storage
  * @todo {String} store - refactor with variable
  * @return {object} budgetItems - Return parsed JSON object
  **/
model.getBudgetItems = function() {
  return JSON.parse( localStorage.getItem( 'Budget Items' ) );
};

/**
  * Store JSON object to localStorage
  * @param {string} budgetItemsStr - Initial items as JSON String
  **/
model.setInitialBudgetItems = function() {
  localStorage.setItem( 'Budget Items', budgetItemsStr );
};

/**
  * Clears all Items from local storage
  * @todo Change to variable argument, maybe
  */
model.clearLocalStorage = function() {
  // localStorage.removeItem( '' );
   localStorage.clear();
};