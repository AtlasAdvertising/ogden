// ========================================================
// 
// Initialize Slick.js
// 
// ========================================================

$('#hero-wrapper').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay: true,
    //autoplaySpeed: 9000,
    arrows: false,
    dots: true,
    customPaging: function(slider, i) {
        return '<div class="pagination-number">' + (i + 1) + '</div>';
    },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: true
        }
      }
    ]
});