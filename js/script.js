$(document).ready(function() {
        $( "button" ).click(function() {
            var value = $( "input" ).val();
            $( "li" ).text( value );
        });
        $("ul").append("<li></li>");
  });