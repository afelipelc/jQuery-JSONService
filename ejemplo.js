$(document).ready(function(){

  $("#form").on("submit", function(event){
    event.preventDefault(); //evita que se envie el form
    
    if($("#nombre").val() == ""){
      alert("Ingrese el nombre");
      $("#nombre").focus();
      return;
    }else if($("#apellidos").val() == ""){
      alert("Ingrese los apellidos");
      $("#apellidos").focus();
      return;
    }else if($("#email").val() == ""){
      alert("Ingrese el email");
      $("#email").focus();
      return;
    }

    //preparar la inserción en la tabla
    var fila='<tr><td>' + $("#nombre").val() + ' ' + $("#apellidos").val() + '</td><td>' + $("#email").val() + '</td><td><a href="#" id="eliminar">Eliminar</a></td></tr>';
    //agregar la fila al cuerpo de la tabla
    $("#registros tbody").append(fila);

    //limpiar los txt
    $("#nombre").val("");
    $("#apellidos").val("");
    $("#email").val("");
    $("#nombre").focus();

    contar();
  });

$("#eliminar").live("click", function(){

});

  $(document).on("click", "#eliminar", function(){
      $(this).parent().parent().hide("slow", function(){
        $(this).remove(); //eliminar la fila TR
        contar();
      });
  });
}); //fin $(document).ready(...)

function contar(){
  $("#registros tfoot tr td"
    ).html("Total: " 
    + $("#registros tbody tr"
      ).length + " registros");
}
