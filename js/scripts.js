$(document).ready(function() {

  const flavors = ["mango", "vanilla", "strawberry"];

  flavors.forEach(function(flavor) {
    $(".favorite").append("<p>" + flavor + "</p>");
  
  
  });
});