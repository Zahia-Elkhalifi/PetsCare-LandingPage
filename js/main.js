$(document).ready(function(){
 $('.header').height($(window).height());

 $(".navbar a").click(function(){
 	$("body,html").animate({
 		scrollTop:$("#" + $(this).data('value')).offset().top
 	},1000)
  
 })

})

// Cache selectors
var lastId,
topMenu = $(".navbar-nav"),
topMenuHeight = topMenu.outerHeight() + 15,
menuItems = topMenu.find("a"),
// Anchors corresponding to menu items
scrollItems = menuItems.map(function () {
  var item = $($(this).attr("href"));
  if (item.length) {
    return item;
  }
});

//  click handler to menu items
menuItems.click(function (e) {
var href = $(this).attr("href"),
  offsetTop = href === "#" ? 0 : $(href).offset().top - topMenuHeight + 1;
$("html, body").stop().animate(
  {
    scrollTop: offsetTop,
  },
  300
);
e.preventDefault();
});

// Bind to scroll
$(window).scroll(function () {
// Get container scroll position
var fromTop = $(this).scrollTop() + topMenuHeight;

// Get id of current scroll item
var cur = scrollItems.map(function () {
  if ($(this).offset().top < fromTop) return this;
});
// Get the id of the current element
cur = cur[cur.length - 1];
var id = cur && cur.length ? cur[0].id : "";

if (lastId !== id) {
  lastId = id;
// Set/remove active class
menuItems
  .parent()
  .removeClass("active")
  .end()
  .filter("[href='#" + id + "']")
  .parent()
  .addClass("active");
}
});

AOS.init({
duration: 1000,
});
