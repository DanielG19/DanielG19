let animals = [];
let AnimalList = document.getElementById("ListAnimals");


function AddAnimals (){
	let newElement = window.prompt('New Animal');
	if(newElement != null){
		animals.push(newElement);
	}
	
	console.log(animals);

	/*while(AnimalList.firstChild)
	AnimalList.removeChild(AnimalList.firstChild)*/

	animals.forEach(function(animal){
		let newAnimal = document.createElement("li");
        let AnimalsNumber = AnimalList.children.length;
        newAnimal.setAttribute('id',AnimalsNumber);
        newAnimal.innerHTML = `${animals.pop()} <button onclick='RemoveAnimal(${AnimalsNumber})'>Eliminar</button>`;
		AnimalList.appendChild(newAnimal);
        console.log(newAnimal)
	});

    
}
function RemoveAnimal(num){

    AnimalList.removeChild(AnimalList.childNodes[num+1]);

}