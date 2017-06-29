$(document).ready(function(){
$('#UserModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

$('#OrderModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
 .getJSON("/users", function(data){
    for (var i=0; i < data.length; i++){
      console.log(data);
    }
})

// .getJSON("/users", function(data){
//   for (var i = 0; i < data.length; i++)
// })


$(document).on('click', '#UserModal', function(data){
  $("#firstname").empty();
  $("#lastname").empty();
  $("#email").empty();
  $("#number").empty();

  var Firstname = $("#firstname").val(),
  var Lastname = $("#lastname").val(),
  var Email = $("#email").val(),
   var Phonenumber = $("#number").val()

    $.ajax({
    method: "GET",
    url: "/users",
    data: {
      firstName: Firstname,
      lastName: Lastname,
      phoneNumber: Phonenumber,
      email: Email,
    }
  })
  })

$(document).on('click', '#senduser', function(data)
  $.ajax({
    method: "POST",
    url: "/users",
    data: {
      firstName: Firstname,
      lastName: Lastname,
      phoneNumber: Phonenumber,
      email: Email,
    }
  })


  // var thisId = $(this).attr("data-id");

  

  });
