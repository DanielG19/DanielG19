class Persona{
    constructor(nombre,apPaterno,apMaterno,email){
        this.nombre = nombre;
        this.apPaterno = apPaterno;
        this.apMaterno = apMaterno;
        this.email = email;
    }
    imprimePersona = function(){
        console.log(this);
    }
}

let persona1 = new Persona("Daniel","Garcia","Altamirano","Daniel@hotmail.com");
//persona1.imprimePersona();
let persona2 = new Persona("Alex","Turner","Turner","Alex@hotmail.com");
//persona2.imprimePersona();
let persona3 = new Persona("Alicia","Gomez","Gomez","Alicia@hotmail.com");
//persona3.imprimePersona();

let personas = [];
personas.push(persona1);
personas.push(persona2);
personas.push(persona3);


console.log(JSON.stringify(personas)); //

var persona4 = `{
    "nombre": "Alicia",
    "apPaterno": "Gomez",
    "apMaterno": "Gomez",
    "email": "Alicia@hotmail.com"
}`;

console.log(JSON.parse(persona4)); //Verifica si una cadena contiene JSON valido.