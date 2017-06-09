$(document).ready(function(){
  // call functions here
  submitForm()
});

// define functions here
function submitForm() {
  $('form').on('submit', function(event) {
    var $text = $('#item').val()
    $('ol').append('<li>' + $text + '</li>')
    event.preventDefault()
  })
}
