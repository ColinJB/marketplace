$(function() {
  $("#contact").submit(function(event){
    var name = $("#name").val();
    var address = $("#address").val();

    $("#namePrint").text(name);
    $("#addressPrint").text(address);

    $("#thanks").show();
    event.preventDefault();
  });

});
