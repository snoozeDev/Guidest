// ===================================
// Project: Voyages-Corsaire
// File: custom-javascript.js
// Author: Jb
// Date: 2019-03-05
// Description: Main JS file
// ===================================
// Video Load
$('video#VideoWorker-0').ready(function(){
    // TODO: Page loader
    $('.loader-wrapper').hide();
});

$(document).ready(function () {
    //AOS
    AOS.init();

    // Video Parallax
    $('.jarallax').jarallax({
        speed: 0.2
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
});
