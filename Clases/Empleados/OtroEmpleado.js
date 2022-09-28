const Persona=require('../Persona.js');

function OtroEmpleado(nombre,apellido,dni,horasdeTrabajo,precioXHora){
    
    this.HorasTrabajadas=horasdeTrabajo;
    this.PrecioXHora=precioXHora;
    this.Sueldo=function(){
        return this.HorasTrabajadas * this.PrecioXHora;
    }

    if(this.Sueldo()>0){
        Persona.call(this,nombre,apellido,dni);
    }else{
        console.log("No puede tener sueldo negativo");
    }
    
}

OtroEmpleado.prototype = Object.create(Persona.prototype);
OtroEmpleado.prototype.constructor = OtroEmpleado;
module.exports=OtroEmpleado;