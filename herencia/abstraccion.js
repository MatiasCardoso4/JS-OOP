//Clase ABSTRACTA maquina de cafe

class MaquinaDeCafe {
    constructor() {
        if (
            new.target === MaquinaDeCafe
        ) {
            throw new Error("No se puede instancia la clas Máquina de café por que es abstracta")
        }
    }

    //Métodos abstractos
    seleccionarBebida() {
        throw new Error("Este método debe ser implementado")
    }

    prepararBebida() {
        console.log('Preparando el café');
    }

    servirBebida() {
        console.log('Sirviendo el café');
    }

    //Método público que va a definir el comportamiento y flujo general (abstracción)
    hacerCafe() {
        this.seleccionarBebida()
        this.prepararBebida()
        this.servirBebida()
    }
}

class expressoMachine extends MaquinaDeCafe{
    seleccionarBebida() {
        console.log('Has seleccionado un expresso');
    }

}


class cappucinoMachine extends MaquinaDeCafe{
    seleccionarBebida() {
        console.log('Has seleccionado un cappucino');
    }


    prepararBebida() {
        console.log('Realizando espuma');
        super.prepararBebida()
    }

}

const expresso = new expressoMachine()
const cappucino = new cappucinoMachine()

expresso.hacerCafe()
console.log('------------------------------');

cappucino.hacerCafe()