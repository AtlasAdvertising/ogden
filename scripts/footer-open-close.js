// ========================================================
//
// Footer open/close
//
// ========================================================

$("#openClose").click(function() {
  $(".sitemap").slideToggle("slow");
  $("body, html").animate({scrollTop: $("#form").height()}, "slow");
  $("#openClose").toggleClass("active");
  if ( $("#openClose").text() === "[+] Site Map" ) {
      $("#openClose").text("[-] Hide Site Map");
  } else if ( $("#openClose").text() === "[-] Hide Site Map" ) {
      $("#openClose").text("[+] Site Map");
  } 
  return false;
}); 