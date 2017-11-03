$(document).ready(function(){
  // call functions here
  submitForm();
});

// define functions here
function submitForm() {
  $('form').on('submit', function(event){
    var todo = $('#item').val();
    $("ol").append('<li>' + todo + '</li>');
    event.preventDefault();
  });
}
