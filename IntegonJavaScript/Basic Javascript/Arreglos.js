let animals = [];

function AddAnimals (){
	let newElement = window.prompt('New Animal');
	if(newElement != null){
		animals.push(newElement);
	}
	
	console.log(animals);
	let AnimalList = document.getElementById("ListAnimals");

	/*while(AnimalList.firstChild)
	AnimalList.removeChild(AnimalList.firstChild)*/

	animals.forEach(function(animal){
		let newAnimal = document.createElement("li");
		/*newAnimal.innerText = animal;*/
		newAnimal.innerText = animals.pop();
		AnimalList.appendChild(newAnimal);
	});
}