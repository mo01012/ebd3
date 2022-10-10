$(document).ready(function() {

    $('.our-servers').owlCarousel({
        rtl: true,
        margin: 10,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 3
            }
        }
    })
    $('.ourClient').owlCarousel({
        rtl: true,
        margin: 10,
        nav: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    })
    $(".page-link").click(function(e) {


        console.log($('this').text())
    })
});