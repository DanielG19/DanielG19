let txt1 = document.getElementById("txt1");
let btn1 = document.getElementById("btn1");
let txtName = document.getElementById("txtName");
let txtEmail = document.getElementById("txtEmail");

btn1.addEventListener('click', function () {
	SearchingAjax();
})

// Set up our HTTP request
//var xhr = new XMLHttpRequest();

var xhr = new XMLHttpRequest();

function SearchingAjax(){

	// Setup our listener to process completed requests
	xhr.onload = function () {

		// Process our return data
		if (xhr.status >= 200 && xhr.status < 300) {
			let result = JSON.parse(xhr.responseText)
			txtName.value = result.name;
			txtEmail.value = result.email;
		} else {
			// What do when the request fails
			console.log('The request failed!');
		}

		// Code that should run regardless of the request status
		console.log('This always runs...');
	};

	// Create and send a GET request
	// The first argument is the post type (GET, POST, PUT, DELETE, etc.)
	// The second argument is the endpoint URL
	xhr.open('GET', `https://jsonplaceholder.typicode.com/users/${txt1.value}`);

	xhr.send();
}