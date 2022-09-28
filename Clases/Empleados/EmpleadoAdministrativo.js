const Persona=require('../Persona.js');

function EmpleadoAdministrativo(nombre,apellido,dni,sueldoFijo){
    
    this.SueldoFijo = sueldoFijo;
    if (this.SueldoFijo>0){
        Persona.call(this,nombre,apellido,dni);
    }else{
        console.log("No puede tener sueldo negativo");
    }
}

EmpleadoAdministrativo.prototype = Object.create(Persona.prototype);
EmpleadoAdministrativo.prototype.constructor = EmpleadoAdministrativo;

module.exports=EmpleadoAdministrativo;