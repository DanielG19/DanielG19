//OOP OBJECT ORIENTED PROGRAMMING

class Animal {
    constructor(categoria) {
        this.categoria = categoria;
    }
}

class CuentaBancaria {

    constructor(saldo = 0, tipo) {
        this.saldo = saldo;
        this.tipo = tipo
    }

    deposito(cantidad) {
        this.saldo += cantidad;
    }


    retiro(cantidad) {
        this.saldo -= cantidad;
    }
}

class TarjetaDeCredito extends CuentaBancaria {
    constructor(saldo, tipo, fechacorte, pagominimo) {
        super(saldo, tipo); //These parameters go to the parent constructor.
        this.fechacorte = fechacorte;
        this.pagominimo = pagominimo;

    }

    imprimeFechadeCorte() {
        console.log("La fecha de corte es: ");
    }

    imprimePagoMinimo() {
        console.log("pago minimo: ");
    }

}

var main = function () {
    let perro = new Animal("perro");
    let gato = new Animal("gato");

    console.log(perro.categoria);
    console.log(gato.categoria);

    let cuenta1 = new CuentaBancaria(5000, 'M');
    cuenta1.deposito(2000);
    cuenta1.retiro(2000);
    cuenta1.deposito(5000);

    let cuenta2 = new CuentaBancaria(10000, 'E');
    console.log(cuenta1.saldo);
    console.log(cuenta2.saldo);

    let cuenta3 = new TarjetaDeCredito(5000, 'TC');
    console.log(cuenta3.saldo);
    console.log(cuenta3.tipo);
    cuenta3.imprimeFechadeCorte();
    cuenta3.imprimePagoMinimo();

    


}

main();