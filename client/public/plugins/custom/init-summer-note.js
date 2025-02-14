  $(function () {
    console.log('🚀 Initializing Summernote');
    $('.textarea').summernote({
      height: 450,
      toolbar: [
        // [groupName, [list of button]]
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['font', ['strikethrough', 'superscript', 'subscript']],
        ['fontsize', ['fontsize']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['table', ['table']],
        ['view', ['fullscreen', 'codeview', 'help']],
        ['height', ['height']]
      ],
      disableDragAndDrop: true
    })
  });