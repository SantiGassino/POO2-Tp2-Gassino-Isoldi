function Pieza(nombre, valor, stock){
    this.Valor = valor;
    this.Stock=stock;
    if (this.Valor>0 && this.Stock>=0){
        this.Nombre=nombre;
    }else{
        console.log("No se puede crear la pieza");
    }
}
module.exports=Pieza;