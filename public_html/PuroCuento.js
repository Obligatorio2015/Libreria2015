/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//----------------------Funcion Login----------------------------------------
$(document).ready(iniciarEventos);
var idEditando;
    idLibro = 1;
function iniciarEventos() {
    $("#botonLogin").click(llamarLogin);
    $("#btnSec1").click(btnSeccion1);
    $("#btnSec2").click(btnSeccion2);
    $("#btnSec3").click(btnSeccion3);
    $("#btnLibro").click(btnLibro);
    $("#btnRevista").click(btnRevista);
    $("#btnAgregar").click(agregarLibro);
    $("#btnBusLib").click(busqueda);
    $("#btnModLib").click(modificarLibro);
}

function llamarLogin() {
    logueo($("#usuario").val(), $("#contrasena").val());
}

var usuarios = new Array();


function logueo(user, password) {
    var encontreUsuario = false;
    var i = 0;
    while (i < usuarios.length && encontreUsuario === false) {
        if (user === usuarios[i].usuario) {
            encontreUsuario = true;

            if (password === usuarios[i].contrasena) {
                if (usuarios[i].tipoUsu === 'administrador') {
                    $("#tabSec3").removeClass("oculto");
                }
                else {
                    $("#tabSec3").addClass("oculto");
                   btnComprar();//prueba ocultar comprar
                    
                }
                $("#bienvenido").removeClass("oculto");
                $("#bienvenido").html("Bienvenido " + usuarios[i].usuario);
            }
            else {
                alert("El usuario/password ingresados no son correctos");
                $("#bienvenido").addClass("oculto");
            }
        }
        i++;
    }
    if (!encontreUsuario) {
        alert("El usuario/password ingresados no son correctos");
        $("#bienvenido").addClass("oculto");
    }
    $("#usuario").val("");
    $("#contrasena").val("");
}

//--------------------------------fin funcion login------------------
//
//--------------------------------funcion secciones------------------
function btnSeccion1() {
    $("#seccion1").removeClass("oculto");
    $("#seccion2").addClass("oculto");
    $("#seccion3").addClass("oculto");
    $("#btnSec1").addClass("active");
    $("#btnSec2").removeClass("active");
    $("#btnSec3").removeClass("active");
   
}
//var tipoActual=-1;
function btnSeccion2() {
    $("#seccion2").removeClass("oculto");
    $("#seccion1").addClass("oculto");
    $("#seccion3").addClass("oculto");
    $("#btnSec2").addClass("active");
    $("#btnSec1").removeClass("active");
    $("#btnSec3").removeClass("active");
}
//
function btnSeccion3() {
    $("#seccion3").removeClass("oculto");
    $("#seccion1").addClass("oculto");
    $("#seccion2").addClass("oculto");
    $("#btnSec3").addClass("active");
    $("#btnSec2").removeClass("active");
    $("#btnSec1").removeClass("active");
    $("#comprar2").addClass("oculto");//ds
    
}
function btnLibro() {
    $("#nuevoLibro").removeClass("oculto");
    $("#nuevaRevista").addClass("oculto");
    $("#btnLibro").addClass("active");
    $("#btnRevista").removeClass("active");
   // tipoActual=1;
}
function btnRevista() {
    $("#nuevaRevista").removeClass("oculto");
    $("#nuevoLibro").addClass("oculto");
    $("#btnLibro").removeClass("active");
    $("#btnRevista").addClass("active");
     //  tipoActual=2;
}
function btnComprar() {
     $("#comprar2").removeClass("oculto");//*probar boton comprar
     $("#ocultarComprar").removeClass("oculto");
     
}
//-------------------------------fin funcion secciones------------------

//-------------------------------funcion alta de libros------------------

var vecLibros = new Array();
var vecRevistas = new Array();


function agregarLibro() {
    $("#errorId").addClass("oculto");
    $("#exito").addClass("oculto");
    var existeCod = existe ($("#codLibro").val());
    if (existeCod === null){
        //si listan las condiciones que se debe cumplir al completar el formulario de agregar libro 
        //si stock es vacio se le agrega el 0 
          if ($("#stock").val()=== "") {
            $("#stock").val(0);
        } 
         //si ningun campo es vacio
        if ( $("#titulo").val()!== "" && $("#descripcion").val()!== "" && $("#autor").val() !== "" &&
             $("#precio").val() !== "" && $("#estado").val()!== "" && $("#imagen").val()!== "" && $("#codLibro").val()!== "" ){
            // si el precio es > 0
            if ($("#precio").val() > 0){
                //si el largo de caracteres del codigo es igual a 15
                if ($("#codLibro").val().length === 13){
                    //si la descripcion es > 15
                    if ( $("#descripcion").val().length >= 15){
                        //si todo lo anterior se cumple lo guarda en el vector vecLibro

                        vecLibros.push(
                        {
                            'id': idLibro,
                            'codigo': $("#codLibro").val(),
                            'imagen': $("#imagen").val().split("\\").pop(), //.split.... arregla que muestre la imagen 
                            'titulo': letraMayuscula($("#titulo").val()),
                            'descripcion': letraMayuscula($("#descripcion").val()),
                            'autor': $("#autor").val(),
                            'precio': $("#precio").val(),
                            'stock': $("#stock").val(),
                            'estado': $("#estado").val()
                        }
                        );
                        idLibro++;

                        publicar ();

                        $("#exito").removeClass("oculto");
                        $("#alertaExito").html("<p><strong>Aviso:</strong>" + " El libro se agrego correctamente"+ "</p>");
                        limpiarCampos();
                    }else {
                        $("#errorId").removeClass("oculto");
                        $("#errorAlert").html("<p><strong>Aviso:</strong>" + " El campo Descripción debe tener al menos 15 carácteres"+ "</p>");
                    }
                }else {
                    $("#errorId").removeClass("oculto");
                    $("#errorAlert").html("<p><strong>Aviso:</strong> El código debe  ser de 13 digitos</p>");
                }

            }
            else {
                $("#errorId").removeClass("oculto");
                $("#errorAlert").html("<p><strong>Aviso:</strong>" + " El precio debe de ser mayor a 0"+ "</p>");
            }
        }
        else {
            $("#errorId").removeClass("oculto");
            $("#errorAlert").html("<p><strong>Aviso:</strong>" + " Todos los campos excepto Stock son obligatorios"+ "</p>");
        }
    }else{
         $("#errorId").removeClass("oculto");
         $("#errorAlert").html("<p><strong>Aviso:</strong>" + " El código ya existe"+ "</p>");
        
    }
    

}
//----------Funcion limpar campos-----------
function limpiarCampos() {
    $(":text").val("");
    $("#imagen").val("");
    
}
//---------- FIN Funcion limpar campos-----------

//----------Funcion limpar alertas-----------
function limpiarAlertas(){
     $("#errorId").addClass("oculto");
     $("#exito").addClass("oculto");
}
//---------- FIN Funcion limpar alertas----------
//
//-------------------------------FIN alta de libros------------------


//--------------funcion usuarios--------------------

var usuarios = new Array(
{
    nombre: 'admin',
    apellido: 'Gomez',
    usuario: 'admin',
    email: 'martin@hotmail.com',
    tipoUsu: 'administrador',
    contrasena: 'admin'
},
{
    nombre: 'Victoria',
    apellido: 'Sanchez',
    usuario: 'vsanchez',
    email: 'vicky@hotmail.com¡',
    tipoUsu: 'administrador',
    contrasena: 'vicky1'
},
{
    nombre: 'Javier',
    apellido: 'Lopez',
    usuario: 'jlopez',
    email: 'jlopez@hotmail.com¡',
    tipoUsu: 'administrador',
    contrasena: 'javier1'
},
{
    nombre: 'Graciela',
    apellido: 'Perez',
    usuario: 'gperez',
    email: 'grace@gmail.com¡',
    tipoUsu: 'vendedor',
    contrasena: 'grace1'
},
{
    nombre: 'Maria',
    apellido: 'Pintos',
    usuario: 'mpintos',
    email: 'maria@hotmail.com¡',
    tipoUsu: 'vendedor',
    contrasena: 'maria1'
}
);

//-------------- FIN funcion usuarios--------------------


//-----------Funcion solo numeros -----------------------


function soloNumeros(e)
{
var keynum = window.event ? window.event.keyCode : e.which;
if ((keynum === 8) || (keynum === 46))
return true;

return /\d/.test(String.fromCharCode(keynum));
}
//------------Fin funcion solo numeros-------------------

//---------Funcion primer letra mayuscula---------------

function letraMayuscula(a) { 
    return a[0].toUpperCase() + a.slice(1);
}

//---------FIN Funcion primer letra mayuscula-----------


//---------Funcion Cambiar Acción ---------------


// Y al seleccionar Alta se activa altaLibro y oculta modificarLibro

function cambiarAccion(){
 //Cuando la opcion es Modificar  
    if ($("#acciones").val() === "Modificar"){
        
 // Cuando se elige la opcion Modificar activa el formulario modificarLibro y oculta el altaLibro 
        $("#modificarLibro").removeClass("oculto");
        $("#altaLibro").addClass("oculto");
    }
// Al volver  seleccionar Alta se activa altaLibro y oculta modificarLibro
    else{
        $("#modificarLibro").addClass("oculto");
        $("#altaLibro").removeClass("oculto");
    }

    
}
//---------FIN Funcion Cambiar Acción ---------------

//*******************************************************
//---------Funcion Buscar ---------------
function busqueda(){
    var lib=existe($("#BusLibro").val());
    if(lib !== null){
        cargarFormulario(lib);
    }else{
        $("#errorId").removeClass("oculto");
        $("#errorAlert").html("<p><strong>Aviso:</strong>" + " No se encontro el libro "+ "</p>");
    }
}
//---------FIN Buscar  ---------------
function existe(codigo){
   
     var buscado = null;
    var  i = 0; 
    while (i< vecLibros.length && buscado === null){
        if (vecLibros[i].codigo === (codigo)){
            buscado = vecLibros[i];
            idEditando = buscado.id;
        }
        else{
            i++;  
        }
    } 
    if(buscado !== null){
        return buscado;
    }else{
        return buscado;
        $("#errorId").removeClass("oculto");
        $("#errorAlert").html("<p><strong>Aviso:</strong>" + " No se encontro el libro "+ "</p>");
    }
}


//---------Funcion cargarFormulario para el Modificar---------------

function cargarFormulario(lib){
    $("#codModLib").val(lib.codigo);
    $("#tituloModLib").val(lib.titulo);
    $("#autorModLib").val(lib.autor);
    $("#descripcionModLib").val(lib.descripcion);
    $("#precioModLib").val(lib.precio);
    $("#stockModLib").val(lib.stock);
    $("#estadoModLb").val(lib.estado);
   
}
//---------FIN cargarFormulario para el Modificar ---------------


// ----------------Funcion modificarLibro-------------

function modificarLibro(){
   var  i = 0;
   var modifique= false;
   while (i< vecLibros.length && !modifique){
      if(vecLibros[i].id=== idEditando){
            vecLibros[i].codigo = $("#codModLib").val();
            vecLibros[i].titulo = $("#tituloModLib").val();
            vecLibros[i].autor = $("#autorModLib").val();
            vecLibros[i].descripcion = $("#descripcionModLib").val();
            vecLibros[i].precio = $("#precioModLib").val();
            vecLibros[i].stock = $("#stockModLib").val();
            vecLibros[i].estado = $("#estadoModLib").val();
            vecLibros[i].imagen = $("#imagenModLib").val().split("\\").pop();
            
            modifique=true;
       }
       
     i++;
     
   }
   if (modifique){
             $("#exito").removeClass("oculto");
             $("#alertaExito").html("<p><strong>Aviso:</strong>" + " Se ha modificado correctamente "+ "</p>");
   }else{
             $("#errorId").removeClass("oculto");
             $("#errorAlert").html("<p><strong>Aviso:</strong>" + " No se ha modificado "+ "</p>");
    }
        publicar(); 
}

// ----------------FIN Funcion modificarLibro-------------


// ----------------Funcion Publicar-------------
function publicar (){
      var publicacion = '';
        for (var i = 0; i < vecLibros.length; i++) {
           publicacion += '<div class="main_left"><img src="tapas/' + vecLibros[i].imagen + '"  width="150" height="200"/>' +
                   '</div>' +
                   '<div  class="main_right">' +
                   '<div>' +
                   ' <ul>' +
                   '<li> Código:' + vecLibros[i].codigo + '</li>' +
                   '<li> Nombre Libro:' + vecLibros[i].titulo + '</li>' +
                   '<li> Autor:' + vecLibros[i].autor + '</li>' +
                   '<li> Stock:' + vecLibros[i].stock + '</li>' +
                   '<li> Estado:' + vecLibros[i].estado + '</li>' +
                   ' </ul>' +
                   '</div>' +
                   '<p>' +
                   vecLibros[i].descripcion +
                   '</p>' +
                   '<h3>Precio:$' + vecLibros[i].precio + '</h3>' +
                   '<label id ="cantLb">Cantidad  </label>'+
                    '<select id="cantidad" >'+
                        '<option value="1">1</option>'+
                        '<option value="2">2</option>'+
                    '</select> '+ 
                   '<input type="button" id="comprar" value="Comprar">' + 
                   '</div>' +
                   '<hr width="100%">';
        }
        $("#mostrarLibro").html(publicacion);
    limpiarCampos();
}
// ----------------FIN publicar--------------

// ----------------Funcion eliminarLibro--------------
function eliminarLibro(){
    var i = 0;
  
    while (i< vecLibros.length ){
       if(vecLibros[i].id=== idEditando){
         vecLibros.splice(i,1);
       }
    i++;   
    }
    publicar();
     $("#exito").removeClass("oculto");
     $("#alertaExito").html("<p><strong>Aviso:</strong>" + " El libro se ha eliminado correctamente "+ "</p>");
    limpiarCampos();
}
// ----------------FIN Funcion eliminarLibro--------------

