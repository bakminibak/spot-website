$(function() {
    console.log( "ready!" );
    $("#m-intro").click(function(){
        //loadSection(webContent[index].htmlTemplate, webContent[index]);
        $('html, body').stop().animate({
            scrollTop: $("#intro").offset().top
        }, 1000);
    }); 


    //PLUGINS
    $('.partner-logos-slider').slick({
        centerMode: true,
        centerPadding: '10px',
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 6,
                slidesToScroll: 1,
                infinite: true
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 4,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1
              }
            },
            {
                breakpoint: 420,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1
                }
              }
        ]
    });
    $('.testimonial-slider').slick({
        centerMode: true,
        centerPadding: '20px',
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false
              }
            },
            {
              breakpoint: 700,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            
        ]
    });

    AOS.init();

});

