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
    //$("#btnSec3").addClass("oculto");
    
    
}
function login() {

    if (($("#user").val() === "admin") && ($("#pass").val() === "1234") || ($("#user").val() === "susana") && ($("#pass").val() === "susana")) {

        $("#bienvenido").removeClass("oculto");
        $("#bienvenido").html("Bienvenido " + $("#user").val());
       
        if (($("#user").val() === "admin") && ($("#pass").val() === "1234")){
             $("#tabSec3").removeClass("oculto");
             //alert("El usuario o la contraseña no son correctos. Intentelo nuevamente.");
        }else {
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
function btnSeccion1 (){
    $("#seccion1").removeClass("oculto");
    $("#seccion2").addClass("oculto");
    $("#seccion3").addClass("oculto");
    $("#btnSec1").addClass("active");
    $("#btnSec2").removeClass("active");
    $("#btnSec3").removeClass("active");
}

function btnSeccion2 (){
    $("#seccion2").removeClass("oculto");
    $("#seccion1").addClass("oculto");
    $("#seccion3").addClass("oculto");
    $("#btnSec2").addClass("active");
    $("#btnSec1").removeClass("active");
    $("#btnSec3").removeClass("active");
}

function btnSeccion3 (){
    $("#seccion3").removeClass("oculto");
    $("#seccion1").addClass("oculto");
    $("#seccion2").addClass("oculto");
    $("#btnSec3").addClass("active");
    $("#btnSec2").removeClass("active");
    $("#btnSec1").removeClass("active");
}
//-------------------------------fin funcion secciones------------------
