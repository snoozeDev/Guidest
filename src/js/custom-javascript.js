// ===================================
// Project: Voyages-Corsaire
// File: custom-javascript.js
// Author: Jb
// Date: 2019-03-05
// Description: Main JS file
// ===================================
// Video Load
var vid = document.getElementById("VideoWorker-0");
vid.onloadeddata = function() {
    var loader = $('.loader-wrapper');
    setTimeout(function () {
        loader.css('opacity', 0);
        setTimeout(function () {
            loader.remove();
        }, 1300);
    }, 500);
};

$(document).ready(function () {
    //AOS
    AOS.init();

    // Video Parallax
    $('.jarallax').jarallax({
        speed: 0.1
    });

    // Countdown timer
    var countDownDate = new Date("Apr 18, 2019 12:00:00").getTime();
    var x = setInterval(function () {
        var now = new Date().getTime();
        var distance = countDownDate - now;
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

        if (distance < 0) {
            clearInterval(x);
            document.getElementById("countdown").innerHTML = "EXPIRED";
        }
    }, 1000);

    // Form
    var cta = $(".cta-btn button");
    cta.click(function() {
        var form = $(".form-wrapper");
        form.slideDown(250);
        cta.css('width', '400px');
        cta.css('border-radius', '0px');

        if (form.is(":visible")) {
            cta.css('cursor', 'default');
        }
        $("#email").focus();
    });
});
