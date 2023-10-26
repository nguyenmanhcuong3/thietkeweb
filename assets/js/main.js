//slide
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1;
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 4000);
}

// slick slider
$('.slider').slick({
    centerMode: true,
    dots: true,
    autoplay: true,
    centerPadding: '60px',
    slidesToShow: 3,
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        Infinity: true,
        slidesToShow: 1
      },
    }]
  });


      document.getElementById("toTopButton").addEventListener("click", function() {
        
        window.scrollTo({
            top: 0,
            behavior: "smooth" 
        });
    });