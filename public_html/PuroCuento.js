/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//----------------------Funcion Login----------------------------------------
$(document).ready(iniciarEventos);

var codLibro = 1000000000000;

function iniciarEventos() {
    $("#botonLogin").click(llamarLogin);
    $("#btnSec1").click(btnSeccion1);
    $("#btnSec2").click(btnSeccion2);
    $("#btnSec3").click(btnSeccion3);
    $("#btnLibro").click(btnLibro);
    $("#btnRevista").click(btnRevista);
    $("#btnAgregar").click(agregarLibro);
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
}
function btnLibro() {
    $("#nuevoLibro").removeClass("oculto");
    $("#nuevaRevista").addClass("oculto");
    $("#btnLibro").addClass("active");
    $("#btnRevista").removeClass("active");
}
function btnRevista() {
    $("#nuevaRevista").removeClass("oculto");
    $("#nuevoLibro").addClass("oculto");
    $("#btnLibro").removeClass("active");
    $("#btnRevista").addClass("active");
}
//-------------------------------fin funcion secciones------------------

//-------------------------------funcion alta de libros------------------

var vecLibros = new Array();
var vecRevistas = new Array();


function agregarLibro() {
    $("#errorId").addClass("oculto");
    $("#exito").addClass("oculto");
   
    //si stock es vacio se le agrega el 0 
    if ($("#stock").val()=== "")  
        $("#stock").val(0);
  
    if ( $("#titulo").val()!== "" && $("#descripcion").val()!== "" && $("#autor").val() !== "" &&
         $("#precio").val() !== "" && $("#estado").val()!== "" && $("#imagen").val()!== ""){
        if ($("#precio").val() > 0){
            if ( $("#descripcion").val().length > 15){
                vecLibros.push(
                {
                    'codigo': codLibro,
                    'imagen': $("#imagen").val(),
                    'titulo': letraMayuscula($("#titulo").val()),
                    'descripcion': letraMayuscula($("#descripcion").val()),
                    'autor': $("#autor").val(),
                    'precio': $("#precio").val(),
                    'stock': $("#stock").val(),
                    'estado': $("#estado").val()
                }
                );
                codLibro+=1;

                var publicacion = '';

               for (var i = 0; i < vecLibros.length; i++) {
                   publicacion += '<div class="main_left"><img src="tapas/' + vecLibros[i].imagen + '"  width="150" height="200"/>' +
                           '</div>' +
                           '<div  class="main_right">' +
                           '<div>' +
                           ' <ul>' +
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
                           '<input type="button" id="comprar" value="Comprar">' +
                           '</div>' +
                           '<hr width="100%">';
                }
                 $("#mostrarLibro").html(publicacion);
                 $("#exito").removeClass("oculto");
                 limpiarCampos();
            }else {
                $("#errorId").removeClass("oculto");
                $("#errorAlert").html("<p><strong>Aviso:</strong>" + " El campo Descripción debera tener al menos 15 carácteres"+ "</p>");
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
    
}
//----------Funcion limpar campos-----------
function limpiarCampos() {
    $("#imagen").val("");
    $("#titulo").val("");
    $("#descripcion").val("");
    $("#autor").val("");
    $("#precio").val("");
    $("#stock").val("");
    $("#estado").val("Habilitado");

}
//---------- FIN Funcion limpar campos-----------


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