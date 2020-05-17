$(document).ready(function() {

  // Stores id of clicked burger as an object, makes ajax put request to controller, reloads page
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

  // Stores input as object, makes ajax post request to controller
  $("#createburger").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("[name=burger]").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
