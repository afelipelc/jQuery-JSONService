$(document).ready(function(){

  $("#JSONTest").on("change",function(){

    $.getJSON( $("#JSONTest").val(), function( data ) {
        var items = [];
        $.each( data, function( key, val ) {
          items.push( "<p><strong>" + key + "</strong>: " + val + "</p>" );
        });

        $("#resultadoJSON" ).html(items.join(""));
    });
  });

  $("form>#lugarBuscar").on("keypress", function(event){
    if(event.which == 13){
      event.preventDefault();
      //alert("Presionó Enter");

      //aqui sigue llamar al WS y procesar el resultado

      $.getJSON( 'https://maps.googleapis.com/maps/api/geocode/json?address=' + $(this).val(), function( data ) {
        console.log(data);
        console.log(data.results[0].formatted_address);

        //latitud?????
        data.results[0].geometry.location.lat

        //tipo de establecimiento
        data.results[0].types[0]


        if(data.status == "OK")
        {

        //continuar
          var items = [];
          items.push( "<p><strong>Direcci&oacute;n: </strong> " + data.results[0].formatted_address + "</p>");

          $.each( data.results[0].address_components, function( key, item ) {

                //detectar tipo
                if(item.types[0] == "street_number")
                  items.push( "<p><strong>N&uacute;mero</strong>: " + item.long_name + "</p>" );
                else if(item.types[0] == "route")
                  items.push( "<p><strong>Calle</strong>: " + item.long_name + "</p>" );
                else if(item.types[0] == "neighborhood")
                  items.push( "<p><strong>Localidad</strong>: " + item.long_name + "</p>" );
                else if(item.types[0] == "locality")
                  items.push( "<p><strong>Municipio</strong>: " + item.long_name + "</p>" );
                else if(item.types[0] == "administrative_area_level_1")
                  items.push( "<p><strong>Estado</strong>: " + item.long_name + "</p>" );
                else if(item.types[0] == "country")
                  items.push( "<p><strong>Pa&iacute;s</strong>: " + item.long_name + "</p>" );
                else if(item.types[0] == "postal_code")
                  items.push( "<p><strong>CP</strong>: " + item.long_name + "</p>" );
          });

          items.push( "<p><strong>Ubicación</strong>: lat. " + data.results[0].geometry.location.lat + "  lon. " + data.results[0].geometry.location.lng +"</p>" );

          items.push( "<p><strong>Tipo</strong>: " + data.results[0].types[0] +"</p>" );
          
          $("#datosLugar" ).html(items.join(""));
          
          
        }
        else
          alert("No se pudo obtener información del lugar. No usar caracteres especiales. Error: " + data.status)
    });
    }
  })
});