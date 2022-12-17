$(document).ready(function() {
    $( "test" ).click(function() {
    alert( "Handler for .click() called." );
    //console.info("Halala")
    });

    $.ajax({
        url: "./data.json",
        dataType: "jsonp",
        cache: false,
        success: function(data) {
          //this.setState({ resumeData: data });
          alert( "Handler for .click() called." );
        }.bind(this),
        error: function(xhr, status, err) {
          console.log(err);
          alert(err);
        }
      });
});

