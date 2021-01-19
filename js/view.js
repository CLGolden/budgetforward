/**
  * View file for displaying content
  **/
/**
  * Main View Object
  **/
let view = {};

/**
  * Calls initial view methods
  **/
view.init = function() {
	
	view.updateTable();

};
/**
  * Populates table with budget items
  **/
 view.updateTable = function() {
	let budgetItems = model.getBudgetItems(),
		tableRow = document.createDocumentFragment(),
		tableBody = helpers.getTableBody();

	// Iterates through collections, e.g., array
	for ( let budgetItem of budgetItems ) {

		// passing in each budgetItem object
		tableRow.append( view.createTableMarkup( budgetItem ) );
	}

	tableBody.append( tableRow );
};

/**
  * Builds markup for row in Budget Items table
  * @param {object} budgetItem
  * @return {element} row - row poplulated with Budget Item details
  **/
view.createTableMarkup = function ( budgetItem ) {
	let row = document.createElement( 'tr' ),
		description = '<td>' + budgetItem.description + '</td>',
		type = '<td>' + budgetItem.type + '</td>',
		payDate = '<td>' + budgetItem.payDate + '</td>',
		frequency = '<td>' + budgetItem.frequency + '</td>',
		increment = '<td>' + budgetItem.increment + '</td>',
		amount = '<td>$ ' + parseInt(budgetItem.amount).toFixed(2) + '</td>',
		balance = '<td>$ ' + '0.00' + '</td>';

	row.innerHTML = description + type + frequency + increment + payDate + amount + balance;

	return row;
}