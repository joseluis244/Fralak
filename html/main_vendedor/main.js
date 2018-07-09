var meses = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
var fecha = new Date();
var fechaI = new Date(fecha)
var fechaF = new Date();
fechaI.setDate(fecha.getDate()-fecha.getDay());
fechaF.setDate(fecha.getDate()+(6-fecha.getDay()));
console.log(fechaI);
console.log(fechaF);
//document.getElementById('fecha').innerHTML = "Agenda del "+fechaI.getDate()+" al "+fechaF.getDate()+" de "+meses[fecha.getMonth()]+" del "+fecha.getFullYear();
//Agenda del 1 al 7 de julio de 2018