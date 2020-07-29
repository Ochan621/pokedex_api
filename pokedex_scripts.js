// Variable that links to the dropdown menu
var pick = document.getElementById('pokedex_pick');

// Create a request variable and assign a new XMLHttpRequest object
var request = new XMLHttpRequest();

// No idea what onreadystatechange means, but it works
request.onreadystatechange = function() {
	// Avoids 404 error, 200 status means success
	if (this.readyState == 4 && this.status == 200) {
		// Parse the JSON data into the variable 'data'
		var data = JSON.parse(this.responseText);
		processFunction(data);
	}
};

//Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://pokeapi.co/api/v2/pokemon', true);

//Send request
request.send();

// Process the data
function processFunction(data) {
	// Set the test label to the total number of pokemon available
	document.getElementById('total').innerHTML = data.count;
}
