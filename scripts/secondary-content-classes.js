// ========================================================
//
// Secondary content Bootstrap classes:
// Dyanmically assigns classes depending on sidebar content
//
// ========================================================

if ( $(".widget-wrapper").children("div").length > 0 ) {
    $(".secondary-content-wrapper").wrap("<div class='col-md-9 col-sm-12'></div>");
    $(".widget-wrapper").wrap("<div class='col-md-3 col-sm-12'></div>");
} else {
    $(".secondary-content-wrapper").wrap("<div class='col-md-12 col-sm-12'></div>");
}