class Animal {
    //Constructor: es un método especial que permite instanciar objetos basandose en la clase
    constructor(nombre,edad,especie,sonido){
        //Propiedad o caracteristicas
        //this hace referencia a la persona que estamos instanciando
        this.nombre = nombre
        this.edad = edad
        this.especie = especie
        this.sonido = sonido
    }

    //Método: es una función que representa un comportamiento propio de esta clase
    hacerSonido (){
        console.log(this.sonido);
        
    }

    decirNombre () {
        console.log(`Hola mi nombre es ${this.nombre}`);
        
    }
}


const manchita = new Animal('Manchita', 1, "Perro",'guau')

const pelusa = new Animal('Pelusa', 2,'gato','miau')


console.log(manchita)
console.log(pelusa);

manchita.hacerSonido()
manchita.decirNombre()
pelusa.decirNombre()