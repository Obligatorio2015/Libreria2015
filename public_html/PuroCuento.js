/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

//----------------------Funcion Login----------------------------------------
$(document).ready(iniciarEventos);

function iniciarEventos() {
    $("#botonLogin").click(login);
    $("#btnSec1").click(btnSeccion1);
    $("#btnSec2").click(btnSeccion2);
    $("#btnSec3").click(btnSeccion3);
    $("#btnLibro").click(btnLibro);
    $("#btnRevista").click(btnRevista);
    $("#btnAgregar").click(agregarLibro);
}

function login() {

    if (($("#user").val() === "admin") && ($("#pass").val() === "1234") || ($("#user").val() === "susana") && ($("#pass").val() === "susana")) {

        $("#bienvenido").removeClass("oculto");
        $("#bienvenido").html("Bienvenido " + $("#user").val());

        if (($("#user").val() === "admin") && ($("#pass").val() === "1234")) {
            $("#tabSec3").removeClass("oculto");
            //alert("El usuario o la contraseña no son correctos. Intentelo nuevamente.");
        } else {
            $("#tabSec3").addClass("oculto");
        }
        $("#user").val("");
        $("#pass").val("");

    }
    else {
        $('#bienvenido').addClass("oculto");
        alert("El usuario o la contraseña no son correctos. Intentelo nuevamente.");
    }
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
    alert($("#imagen") .val());
    vecLibros.push(
                {
                    'codigo':1234567,
                    'imagen':$("#imagen") .val(),
                    'titulo':$("#titulo") .val(),
                    'descripcion': $("#descripcion") .val(),
                    'autor': $("#autor") .val(),
                    'precio': $("#precio") .val(),
                    'stock':  $("#stock") .val(),
                    'estado': $("#estado") .val()
                }
        );

var publicacion = '';
   for (var i=0; i<vecLibros.length; i++){
        publicacion+='<div class="main_left"><img src="tapas/'+vecLibros[i].imagen  + '"  width="150" height="200"/>'+
                       
        // + '<img src="tapas/' + 'tapa1--GlamourEspañaMarzo2015.jpg' + '"' + ' title="' + vecLibros[i].titulo + '" width="150" height="200"/>'+
                     '</div>' +
                    '<div  class="main_right">'+
                        '<div>'+
                           ' <ul>'+
                                '<li> Nombre Libro:'+ vecLibros[i].titulo+ '</li>'+
                                '<li> Autor:' + vecLibros[i].autor + '</li>'+
                                '<li> Stock:' + vecLibros[i].stock + '</li>'+
                                '<li> Estado:' +vecLibros[i].estado + '</li>' +
                           ' </ul>' + 
                        '</div>'+
                        '<p>'+       
                            vecLibros[i].descripcion +
                        '</p>'+
                        '<h3>Precio:$'+ vecLibros[i].precio+ '</h3>'+
                            '<input type="button" id="comprar" value="Comprar">'+
                    '</div>'+
                    '<hr width="100%">';
}
      $("#mostrarLibro").html(publicacion);
}
function mostrarValor() {
    if (vecLibros.length < 1) {
      alert("No ingreso nada");

    }
    else {
        for (var i = 0; i < vecTitulo.length; i++) {
            alert(vecTitulo [i] + "<br>");

        }
    }
  
}


//-------------------------------fin alta de libros------------------

//--------------funcion usuarios--------------------
/*
var usuarios = new Array();

function usuarios() {
    
                    
                    'nombre':Victoria,
                    'apellido':Piccini,
                    'nomUsu':vpiccini,
                    'email':vicky@hotmail.com,
                    'tipoUsu': administrador,
                    'pass':vicky1
                    
                }
        );
 */