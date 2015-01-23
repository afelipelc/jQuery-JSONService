
$(document).ready(function(){
  $.ajax({
    type: "GET",
    dataType: "json",
    url: "http://localhost:8000/api/v1/posts/",
    data: {}
  })
  .done( function(data) {
    console.log(data);
    $("#content").append("<h1>Posts</h1>");
    var datos ="<ul>";
    $.each(data.posts, function (i, item) {
      datos +="<li><a href='#"+item.id+"' id='verpost'>"+item.titulo+"</a></li>";
    });
    datos +="</ul>";
    $("#content").append(datos);
  });

  //implementar el evento clic para #verpost
  $(document).on("click","#verpost",function(){
    //mandar en un alert el valor del
    //atributo href del link que se acaba de 
    //presionar

    var id = $(this).attr("href");
    //id pudede tener = #2, solo queremos 2
    id = id.replace("#","");
    //$(this).attr("href","#Lo he cambiado");
    //alert(id);

    //ajax, y procesar el resultado
    $.ajax({
      type: "GET",
      dataType: "json",
      url: "http://localhost:8000/api/v1/posts/"+id,
      data: {}
    })
    .done( function(data) {
      console.log(data);
      $("#content").html("<h1>"+data.post.titulo+"</h1>");
      $("#content").append("<span>Por: "+data.post.user_id + " el " + data.post.created_at + "</span>");
      $("#content").append("<p>"+data.post.contenido+"</p>");
    });
  });
});