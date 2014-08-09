// Colors //

var colors = ["0ad7b5", "fb8e63", "8ebaf9", "e2ae63", "eb77c8", "f86161"]

function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};

colors = shuffle(colors);

$(document).ready(function() {
  $(".logo").each(function(i) {
    $(this).css("background-color", "#" + colors[i]);
  });
  $(".hashtag").each(function(i) {
    $(this).css("color", "#" + colors[i]);
  });
});
