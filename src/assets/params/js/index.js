$(function () {
    var navMain = $("#navbarsExampleDefault");
    navMain.on("click", "a", null, function () {
    navMain.collapse('hide');
    });
    });


  document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('select');
    var instances = M.FormSelect.init(elems, options);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('select').formSelect();
  });