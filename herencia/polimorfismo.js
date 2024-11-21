class Instrumento {
    constructor(nombre) {
        this.nombre = nombre
    }

    tocar() {
        console.log(`${this.nombre} esta produciendo un sonido`);

    }
}


class Guitarra extends Instrumento {
    constructor() {
        super('Guitarra')
    }

    //POLIMORFISMO: es la capacidad de múltiples clases a responder distinto a una misma función o método

    //Sobreescribir o pisar [OVERRIDE] el método heredado

    tocar() {
        console.log("\x1b[31m%s\x1b[0m", `La ${this.nombre} está haciendo un solo`);
    }
}


class Bateria extends Instrumento {
    constructor() {
        super('Bateria')
    }

    //POLIMORFISMO: es la capacidad de múltiples clases a responder distinto a una misma función o método

    //Sobreescribir o pisar [OVERRIDE] el método heredado

    tocar() {
        console.log("\x1b[32m%s\x1b[0m", `La ${this.nombre} está tocando los tambores a un gran ritmo`);
    }
}


class Piano extends Instrumento {
    constructor() {
        super('Piano')
    }

    //POLIMORFISMO: es la capacidad de múltiples clases a responder distinto a una misma función o método

    //Sobreescribir o pisar [OVERRIDE] el método heredado

    tocar() {
        console.log("\x1b[33m%s\x1b[0m", `El ${this.nombre} está haciendo unas hermosas notas pentatónicas de blues`);
    }
}

function orquesta(instrumento){
    instrumento.tocar()
}


const guitarra = new Guitarra()
const bateria = new Bateria()
const piano = new Piano()


orquesta(guitarra)
orquesta(bateria)
orquesta(piano)


// console.log("\x1b[31m%s\x1b[0m", "Este texto es rojo");
// console.log("\x1b[32m%s\x1b[0m", "Este texto es verde");
// console.log("\x1b[33m%s\x1b[0m", "Este texto es amarillo");
// console.log("\x1b[34m%s\x1b[0m", "Este texto es azul");
// console.log("\x1b[35m%s\x1b[0m", "Este texto es magenta");
// console.log("\x1b[36m%s\x1b[0m", "Este texto es cian");
