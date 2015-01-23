$(document).ready(function() {

  //aqui agregar el código de los ejercicios

  //Ej #1:
  //Contar el número de elementos: H1, H3, div, a

  console.log("Elementos H1: " + $("h1").length);

  console.log("Elementos H3: " + $("h3").length);

  console.log("Elementos DIV: " + $("div").length);

  //Ej. #2
  //Contar el número de hipervínculos que apuntan a: “visita”

  // jquery get items by attribute

console.log($('a[href=visita]').length);

//Ej. #3
//Contar el número de párrafos dentro del elemento #content

console.log("párrafos'dentro de #content: " + $("#content p").length);


//Ej. #4
//Obtener el contenido del 2do div dentro de #content

// jquery get element content
// jquery get element by index

console.log($("#content div:eq(1)").html());


//Ej. #5
//Debajo de form, agregar el siguiente párrafo:

//jquery insert after element

//<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,ultricies nec, pellentesque eu, pretium quis, sem.</p>

$('form').after('<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,ultricies nec, pellentesque eu, pretium quis, sem.</p>');

//Ej. #6
//Mostrar el contenido de los cuadros de texto al presionar el botón send message

// jquery on form submit
$("form" ).submit(function( event ) {
  //alert( "Handler for .submit() called." );
  event.preventDefault();

//obtener los valores de los txt
// #name  y   #email
  console.log($("#name").val());


});

});