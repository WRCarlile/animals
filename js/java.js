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
  $("button#cat").click(function() {
    $("ul#user").before("<img src='img/cat.jpg'/>");
    $("ul#webpage").before("<img src='img/dog.jpg'/>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("button#dog").click(function() {
    $("ul#user").before("<img src='img/dog.jpg'/>");
    $("ul#webpage").before("<img src='img/cat.jpg'/>");
    $("ul#user").children("li").first().click(function() {
      $(this).remove();
    });
    $("ul#webpage").children("li").first().click(function() {
      $(this).remove();
    });
  });
});
