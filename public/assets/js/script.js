$(document).ready(function() {

  // Stores id of burger from devour-form, makes put request to /api/burgers
  $(".devour-form").on("submit", function(event) {
    event.preventDefault();
    
    var id = event.target.querySelector('.burger_id').value;
   
    var burgerId = {
      id: id
    }

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: burgerId
    }).then(
      function() {
        location.reload();
      }
    );
  });

  // Retrieves input value from createburger form, makes post request to /api/burgers
  $("#createburger").on("submit", function(event) {

    event.preventDefault();

    var newBurger = {
      name: $("[name=burger]").val().trim()
    };

    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        location.reload();
      }
    );
  });
});
