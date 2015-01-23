/*
* Learn jQuery at http://api.jquery.com/
*/

var UrlService = "http://localhost:8000/api/v1/";

$(document).ready(function(){
  doRequest(UrlService+"posts/", "GET", "", cargarPosts);

  $(document).on("click", "#posts", function()
  {
    //alert($(this).attr("data"));
    doRequest(UrlService+"posts/", "GET", "", cargarPosts);
  });

  $(document).on("click", "#viewpost", function()
  {
    //alert($(this).attr("data"));
    doRequest(UrlService+"posts/"+$(this).attr("data"), "GET", "", datosPost);
  });

  $(document).on("click", "#nuevo", function(){
    $("#content").load("postform.html");
  });

  $(document).on("submit","#postform", function(event){
    event.preventDefault();
    alert("enviando form");
    var datos = { titulo:$("#titulo").val(), descripcion: $("#descripcion").val(), contenido: $("#contenido").val(), tags: $("#tags").val()};
    console.log(datos);
    doRequest(UrlService+"posts/", "POST", datos, recibeMensaje);
  });
});

function doRequest(URI, type, datasend, callback){
 $.ajax({
    type: type,
    url: URI,
    dataType: "json",
    data: datasend,
    cache: false
    })
  .done(function(data) {                   
        console.log(data);
        callback(data); //excecute the callback function ToDo
    })
  .fail(function(jqXHR, textStatus) {
    alert( "Request failed: " + textStatus );
    return null;
  });
}

function cargarPosts(data){
  //console.log(data);
  $("#content").html('<h2>Posts</h2><ul class="list-unstyled">');

  $.each(data.posts, function ( i, item) {
    //alert(item.titulo);
    var content = '<li><a href="#" id="viewpost" data="'+item.id+'"><strong>'+item.titulo+'<strong></a><p>'+item.descripcion+'</p></li>';
    $("#content").append(content);
  });
  $("#content").append("</ul>");
}

function datosPost(data){
  $("#content").html('<h2>'+data.post.titulo+'</h2>');
  $("#content").append('<span>Por: <em>Autor--</em> el '+data.post.created_at+'</span>');
  $("#content").append('<p>'+data.post.contenido+'</p>');
  $("#content").append('<p><strong>Tags: </strong> ' + data.post.tags+'</p>');

  doRequest(UrlService+"posts/"+data.post.id+"/comments", "GET", "", procesaComentarios);
  
}

function procesaComentarios(data){
  $("#content").append('<div><h4>Comentarios</h4>');
  $.each(data.comments, function ( i, item) {
    var content = '<div><span>'+item.user_id+' el '+item.created_at+'</span><p>'+item.comentario+'</p></div>';
    $("#content").append(content);
  });
  $("#content").append("</div>");
}

function recibeMensaje(data){
  //doRequest(UrlService+"posts/"+data.post.id, "GET", "", datosPost);
  datosPost(data);
}