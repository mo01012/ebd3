$(document).ready(function() {
        $(".click").on("click", function(event) {
            {
                // $(".box").to()
                // $("li").removeClass("active")
                // $(this).addClass("active rounded-pill")
                window.console.log($((this).attr("data-scroll")))
                    // } else {
                    //     $(".box").show()
                    //     $("li").removeClass("active")
                    //     $(this).addClass("active rounded-pill");
            }
        })
    })
    //