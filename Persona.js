class Persona {
    //Constructor: es un método especial que permite instanciar objetos basandose en la clase
    constructor(nombre,edad,profesion){
        //Propiedad o caracteristicas
        //this hace referencia a la persona que estamos instanciando
        this.nombre = nombre
        this.edad = edad
        this.profesion = profesion
    }
}


const carolina = new Persona('Carolina',18, 'ingeniero')
const ricardo = new Persona('Ricardo', 22, 'Estudiante de programación')


console.log(carolina);
console.log(ricardo);