class Animal {
    constructor(nombre, sonido) {
        this.nombre = nombre
        this.sonido = sonido
    }

    hacerSonido() {
        console.log(`${this.nombre} hace ${this.sonido}`);
    }
}


class Perro extends Animal {
    constructor(nombre) {
        //Super hacer referencia al llamadao del constructor del padre del que hereda
        super(nombre, 'Guau')
    }

    moverLaCola() {
        console.log(`${this.nombre} esta moviendo la cola`);
    }

}


class Gato extends Animal {
    constructor(nombre) {
        super(nombre, 'Miau')
    }

    ronronear() {
        console.log(`${this.nombre} esta ronroneando`);

    }
}


const perro = new Perro('Toby')
const gato = new Gato('Julio')

perro.hacerSonido()
perro.moverLaCola()

gato.hacerSonido()
gato.ronronear()