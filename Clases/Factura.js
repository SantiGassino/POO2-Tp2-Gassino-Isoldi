const PiezaModulo=require('../PiezaModulo.js');

function Factura(identificador,vendedor,piezasVenta,cantidadVendida){
    this.Vendedor=vendedor;
    this.Piezas=piezasVenta;
    this.CantVendida=cantidadVendida;
    
    if (this.Vendedor.Nombre!=undefined && this.Piezas!=[]){
        this.Id=identificador;
    }else{
        console.log("No se puede crear la Factura");
    }

    this.calcularMonto=function(){
        var total=0;
        var i=0;
        this.Piezas.forEach(pieza => {
            total += pieza.Valor*this.CantVendida[i];
            i++;
        });
        return total;
    }

    this.Vendedor.Ventas += this.calcularMonto();
    for(i=0;i<this.Piezas.length;i++){
        PiezaModulo.vender(this.Piezas[i],this.CantVendida[i]);
    }
}
module.exports=Factura;