const VendedorConAntiguedad=require('./Clases/Vendedores/VendedorConAntiguedad.js');
const VendedorSinAntiguedad=require('./Clases/Vendedores/VendedorSinAntiguedad.js');
const EmpleadoAdministrativo=require('./Clases/Empleados/EmpleadoAdministrativo.js');
const OtroEmpleado=require('./Clases/Empleados/OtroEmpleado.js');
const Factura=require('./Clases/Factura.js');
const Pieza=require('./Clases/Pieza.js');
//__________________________________________________
const PersonalModulo=require('./PersonalModulo');
const PiezaModulo=require('./PiezaModulo');
//__________________________________________________

var rueda= new Pieza("Rueda",100,50);
var llanta= new Pieza("Llanta",150,80);
PiezaModulo.agregarPieza(rueda,0);
PiezaModulo.agregarPieza(llanta,6);
PiezaModulo.agregarPieza(rueda,10);
//__________________________________________________

var Agus=new VendedorSinAntiguedad("Agus","Isoldi",47227834,1,0);
var Roberto=new VendedorSinAntiguedad("Roberto","Alvarez",1234556,10,0);
var Santiago=new VendedorSinAntiguedad("Santiago","Gassino",42145788,5,0);

PersonalModulo.agregarEmpleado(Agus);
PersonalModulo.agregarEmpleado(Roberto);
PersonalModulo.agregarEmpleado(Santiago);
console.log(PersonalModulo.Empleados);
PersonalModulo.sacarEmpleado(Roberto.Nombre);
console.log(PersonalModulo.Empleados);
//__________________________________________________

console.log(PiezaModulo.stock);
var Factura1=new Factura(1,Agus,[rueda,llanta],[20,10]);
console.log(PiezaModulo.stock);
console.log(Agus);