$(document).ready(function() {
  
  $(".post-header a").removeAttr("href")
  
  $(".post .post-header a").first().css("font-size", "-webkit-xxx-large")
  $(".post .post-meta").first().css("display", "none")
  $(".post .post-header .post-meta").css("display", "none")
});
