class FiguraGeometrica{
    constructor(base,altura){
        this.base = base;
        this.altura = altura;
    }

}

class Triangulo extends FiguraGeometrica{

    calculaArea(){
        return (this.base * this.altura)/2
    }
}

class Cuadrado extends FiguraGeometrica{

    constructor(lado){
        super(lado);
        //this.base = lado;
    }

    calculaArea(){
        return (this.base * this.base)
        
    }
}

class Rectangulo extends FiguraGeometrica{
 
    calculaArea(){
        return (this.base * this.altura)
    }
}

var cuadrado = new Cuadrado(3);
var triangulo = new Triangulo(3,2);
var rectangulo = new Rectangulo(3,2);

console.log(cuadrado.calculaArea());
console.log(triangulo.calculaArea());
console.log(rectangulo.calculaArea());

