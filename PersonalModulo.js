var PersonalModulo = (function(){
    let Empleados=[];

    function agregarEmpleado(Empleado) {
        Empleados.push(Empleado);
    }

    function sacarEmpleado(Empleado) {
        i=Empleados.indexOf(Empleado);
        Empleados.splice(i,1);
    }

    return {
        agregarEmpleado: agregarEmpleado,
        sacarEmpleado: sacarEmpleado,
        Empleados
    };
})();

module.exports=PersonalModulo;