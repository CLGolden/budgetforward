//PRACTICING LOCALSTORAGE

let practiceForm = document.getElementById( 'practiceForm' ),
	printBox = document.getElementById( 'printBox' ),
	storedJsonStr = localStorage.getItem( 'Form Input' ),
	storedData = JSON.parse( storedJsonStr );

console.log( typeof storedJsonStr + storedJsonStr );

function formHandler( event ) {
	event.preventDefault();

	let data = new FormData( event.target ),
		value = Object.fromEntries( data.entries() ),
		jsonValue = JSON.stringify( value );
		
	localStorage.setItem( 'Form Input', jsonValue );

	practiceForm.reset();

}
practiceForm.addEventListener( 'submit', formHandler );

function displayFormData() {
	let h3El = document.createElement( 'h3' ),
	h3Content = document.createTextNode( storedData.name ),
	newHeading = h3El.append( h3Content );

	printBox.append( h3El );
}
displayFormData();