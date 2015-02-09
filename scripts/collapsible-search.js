// ========================================================
//
// Collapsible search:
// Opens and closes the hidden search area
//
// ========================================================

$(".search-icon").addClass("search-closed");

$(".search-icon").click(function(e) {
  e.preventDefault();
  if ($(".search-icon").hasClass("search-open")) {
    console.log("Close Search");
    closeSearch();
  } else if ($(".search-icon").hasClass("search-closed")) {
    console.log("Open Search");
    openSearch();
  } else {
    console.log("Click");
  }
});

$(".search-close").click(function() {
  if ($(".search-bar").hasClass("search-open")) {
    console.log("Close Search");
    closeSearch();
  } else if ($(".search-bar").hasClass("search-closed")) {
    console.log("Open Search");
    openSearch();
  } else {
    console.log("Click");
  }
});

function openSearch() {
  $(".search-bar").show()
    .animate({
      marginTop: "0"
    }, 500)
    .addClass("search-open")
    .removeClass("search-closed");
  $(".search-bar input#search").focus();
  $(".search-icon").removeClass("search-closed").addClass("search-open");
};

function closeSearch() {
  $(".search-bar").animate({
      marginTop: "-40px"
    }, 500, function() {
      $(this).hide();
    })
    .addClass("search-closed")
    .removeClass("search-open");
  $(".search-bar input#search").blur();
  $(".search-icon").addClass("search-closed").removeClass("search-open");
};
