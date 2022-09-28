const Persona=require('../Persona.js');

function VendedorSinAntiguedad(nombre,apellido,dni,valorDeComision,montoVendido){
    
    this.Comision=valorDeComision;
    this.Ventas=montoVendido;
    this.Sueldo = function(){
        return this.Comision * this.Ventas;
    }

    if (this.Sueldo()>=0){
        Persona.call(this,nombre,apellido,dni);
    }else{
        console.log("No puede tener sueldo negativo");
    }
}
VendedorSinAntiguedad.prototype = Object.create(Persona.prototype);
VendedorSinAntiguedad.prototype.constructor = VendedorSinAntiguedad;

module.exports=VendedorSinAntiguedad;