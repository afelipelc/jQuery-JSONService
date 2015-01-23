$(document).ready(function() {
  //punto #1
  console.log('Elementos H1:' + $("h1").length);
  console.log('Elementos H3:' + $("h3").length);
  console.log('Elementos div:' + $("div").length);
  console.log('Elementos a:' + $("a").length);

  // Punto #2
  //Contar el número de hipervínculos que apuntan a: “visita”

var totalVisita=0;

  $.each($("a"), function(i, item) {
    console.log(i);
    console.log(item);
    console.log(item.href);
    console.log($(this).attr('href'));

    if($(this).attr('href') == 'visita')
      totalVisita++;
  });
  //decir cuantos apuntan
  console.log('Total de links hacia: Visita >> ' + totalVisita);

   //utilizando el potencial de jQuery
   console.log($("a[href$='visita']").length);

   //Punto #3
   //Contar el número de párrafos dentro del elemento #content

   // $().find ¿cómo usar Find?
   // ¿cómo armar un selector para lo que se requiere?
   console.log("párrafos dentro de #content: " + $("#content p").length);
  
   console.log($("#content").find("p").length);

   //Punto #4
   //Obtener el contenido del 2do div dentro de #content

   //jquery select by index

   console.log($("#content div:eq(1)").html());

   //Punto #5
   //Debajo de form, agregar el siguiente párrafo: <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,ultricies nec, pellentesque eu, pretium quis, sem.</p>

  $("#colecciones form").after("<p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>");

  //punto #6
  //Mostrar el contenido de los cuadros de texto al presionar el botón send message

  // jquery on submit form
  $("form").submit(function(event){
    event.preventDefault();
    console.log("Name: "+ $("#name").val());
    console.log("Email: "+ $("#email").val());
  });

  //punto #7
  //Agregar 2 nuevas filas a la tabla

  //jquery insert
  $(".data").append("<tr><td>Fila 1</td><td>Fila 1</td><td>Fila 1</td><td>Fila 1</td></tr>");
  $(".data").append("<tr><td>Fila 2</td><td>Fila 2</td><td>Fila 2</td><td>Fila 2</td></tr>");
  
  //punto #8
  //Eliminar la primera fila de la tabla
  //jquery remove element

  $(".data tr:eq(0)").remove();

  //
});
