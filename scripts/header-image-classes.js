// ========================================================
//
// Applies "no-image" class if header image is empty
//
// ========================================================

if ($("#secondaryHeaderImage").contents("img").length < 1) {
  $("#secondaryHeaderImage").addClass("no-image");
  $(".SectionHeaderRepeater").addClass("no-image");
}
