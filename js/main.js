// Google map
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8
  });
}

// Slideshow
var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 10000); // Change image every 10 seconds
}


$(function () {
  $("#datepicker").datepicker();

// Toggle body on menu click
$('#side-nav a').on('click', function (e) {
  if (this.hash !== '') {
    e.preventDefault();
    const hash = this.hash;

    $(hash).parent().children().not($('.slideshow-container')).css("display", "none");
    $(hash).animate({ width: 'toggle' }, 500);
  }
});

$('.logo').on('click', function () {
  window.location.reload;
})

// Menu show/hide
$('#menubtn').on('click', function () {
  $('html, body').animate({ scrollTop: 0 }, 800);
  $('#side-nav').toggleClass('hidden');
  return false;
});

$('.menu-item a').on('click', function () {
  $('#side-nav').toggleClass('hidden');
});

// // Smooth Scrolling
if (window.innerWidth < 813) {
  $('#side-nav ul li a').on('click', function (e) {
    if (this.hash !== '') {
      e.preventDefault();
      const hash = this.hash;
      $('#side-nav').toggleClass('hidden');
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        800
      );
    }
  });
}

});