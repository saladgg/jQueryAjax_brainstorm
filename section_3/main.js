$(function() {
  let $posts = $("#posts");
  let $userId = $("#userId");
  let $id = $("#id");
  let $title = $("#title");
  let $body = $("#body");

  let postsTemplate = "<li>ID {{id}}, Title: {{title}}</li>";

  function addPost(post) {
    $posts.append(Mustache.render(postsTemplate, post));
  }

  $.ajax({
    type: "GET",
    url: "https://jsonplaceholder.typicode.com/posts",
    success: function(posts) {
      $.each(posts, function(i, post) {
        addPost(post);
      });
    },
    error: function() {
      alert("Error loading orders . . .");
    }
  });

  $("#submit").click(function() {
    let postdata = {
      userId: $("#userId").val(),
      id: $("#id").val(),
      title: $("#title").val(),
      body: $("#body").val()
    };
    $.ajax({
      type: "POST",
      data: postdata,
      url: "https://jsonplaceholder.typicode.com/posts",
      success: function(newPost) {
        addPost(newPost);
      },
      error: function() {
        alert("something went wrong, post not successful . . .");
      }
    });
  });
});
