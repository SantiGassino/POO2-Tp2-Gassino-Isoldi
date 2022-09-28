var PiezaModulo= (function(){
    let stock=[];
    
    function validarCantidad(cantidad){
        return (cantidad>=0);
    }

    function piezaEnStock(Pieza){    //retorna posicion de pieza en lista de stock
        var i=0;
        var a=-1;
        while (i<stock.length){
            if (stock[i][0]==Pieza.Nombre){
                a=i;
            }
            i++;
        }
        return a;
    }
    //___________________________________________
    function agregarPieza(Pieza,Cantidad) {
        if(validarCantidad(Cantidad)){
            var a=piezaEnStock(Pieza);
            if (a==-1){
                stock.push([Pieza.Nombre,Cantidad+Pieza.Stock])
            } else{
                stock[a][1]+=Cantidad
            }
        }
    }

    function vender(Pieza,Cantidad) {
        if(validarCantidad(Cantidad)){
            var a=piezaEnStock(Pieza);
            if (a!=-1 && stock[a][1]>Cantidad){
                stock[a][1]-=Cantidad;
            } else{
                console.log("Esta venta no se puede realizar.");
            }
        }
    }

    return {
        agregarPieza: agregarPieza,
        vender: vender,
        stock
    }
})();

module.exports=PiezaModulo;