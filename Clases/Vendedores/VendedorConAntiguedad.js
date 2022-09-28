const Persona=require('../Persona.js');

function VendedorConAntiguedad(nombre,apellido,dni,sueldoFijo,valorDeComision,montoVendido){
    
    this.Comision=valorDeComision;
    this.Ventas=montoVendido;
    this.SueldoFijo=sueldoFijo;
    this.Sueldo = function(){
        return this.Comision * this.Ventas + this.SueldoFijo;
    }
    
    if (this.Sueldo()>=0){
        Persona.call(this,nombre,apellido,dni);
    }else{
        console.log("No puede tener sueldo negativo");
    }
}
VendedorConAntiguedad.prototype = Object.create(Persona.prototype);
VendedorConAntiguedad.prototype.constructor = VendedorConAntiguedad;

module.exports=VendedorConAntiguedad;