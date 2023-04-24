$(document).ready(function() {
  $('#ocr-form').submit(function(event) {
    event.preventDefault();
    var formData = new FormData();
    formData.append('image', $('#image-input')[0].files[0]);
    $.ajax({
      url: 'https://revowrite.github.io/',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(response) {
        $('#ocr-result').html('<p>' + response.result + '</p>');
      },
      error: function(xhr, status, error) {
        console.log(error);
      }
    });
  });
});
