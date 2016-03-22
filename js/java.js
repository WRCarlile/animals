$(document).ready(function() {
  $("button#dog").click(function() {
    $("ul#user").prepend("<li>Bark!!</li>");
    $("ul#webpage").prepend("<li>Meow!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });

  $("button#cat").click(function() {
    $("ul#user").prepend("<li>Meow!</li>");
    $("ul#webpage").prepend("<li>Bark!</li>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
});

$(document).ready(function() {
  $("button#dog").click(function() {
    $("p#cat1").before("<img src='img/cat.jpg'/>");
    $("p#dog1").before("<img src='img/dog.jpg'/>");
    $("p#cat").children("p").first().click(function() {
      $(this).remove();
    });
    $("p#dog").children("p").first().click(function() {
      $(this).remove();
    });
  });
});
