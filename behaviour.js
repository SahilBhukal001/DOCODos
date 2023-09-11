$(function() {
    // Handle form submission
    $('#upload-form').submit(function(event) {
      event.preventDefault();
      var fileInput = document.getElementById('doc-upload');
      var file = fileInput.files[0];
      var url = URL.createObjectURL(file);
      window.open(url, '_blank');
    });
  });


  // Uploaded_Image.Js

  $(document).ready(function () {
    $('.ncontainer img').on('click', function () {
        var imgSrc = $(this).attr('src');
        var modalContent = '<img src="' + imgSrc + '" class="img-fluid" />';
        $('#myModal .modal-body').html(modalContent);
        $('#myModal').modal('show');
    });
});