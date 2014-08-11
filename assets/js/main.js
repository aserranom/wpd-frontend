// Resize //

$(window).on("resize", function (){
	var width = $('body').width();
	if (width < 640) {
		size = 100 * width / 640;
		$('body').css("font-size", size + "%");
  }
});

// Colors //

var colors = ["0ad7b5", "fb8e63", "8ebaf9", "e2ae63", "eb77c8", "f86161"]
var $imageWrapper; // REMOVE

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

colors = shuffle(colors);

$(document).ready(function() {
  $(window).resize()
  $(".logo").each(function(i) {
    $(this).css("background-color", "#" + colors[i]);
  });
  $(".hashtag").each(function(i) {
    $(this).css("color", "#" + colors[i]);
  });
  $(".image-container").click(function() { 
    $imageWrapper = $(this).parent(".image-wrapper");
    $imageWrapper.addClass("visible");
    $imageWrapper.children(".social-buttons, .close-icon").addClass("visible");
    $(".overlay").addClass("visible");
  });
  $(".close-icon, .overlay").click(function() { 
    $(".visible").removeClass("visible");
  });
});

