// ===================================
// Project: Voyages-Corsaire
// File: custom-javascript.js
// Author: Jb
// Date: 2019-03-05
// Description: Main JS file
// ===================================

// Social Media Popup
function popup(url){
    var popUpWindow = window.open(
        url,
        '',
        'height=450,width=550,left=10,top=10,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no,status=yes'
    );
}

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
    var jrlx = $('.jarallax');
    jrlx.jarallax({
        speed: 0.1
    });

    jarallax(jrlx, {
        disableVideo: function () {
            return /iPad|iPhone|iPod|Android/.test(navigator.userAgent);
        }
    });

    // Countdown timer
    var countDownDate = new Date("Apr 18, 2019 17:00:00").getTime();
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

    //Social Media
    // - FB
    $(".facebook>a").click(function(){
        FB.ui({
            method: 'share',
            href: 'https://voyages-corsaire.000webhostapp.com/',
            display: 'popup',
            // hashtag: 'guidest',
            // quote: 'yay working !'
        }, function (response) {});
    });
    // - TWITTER
    var getWindowOptions = function() {
        var width = 500;
        var height = 350;
        var left = (window.innerWidth / 2) - (width / 2);
        var top = (window.innerHeight / 2) - (height / 2);

        return [
            'resizable,scrollbars,status',
            'height=' + height,
            'width=' + width,
            'left=' + left,
            'top=' + top,
        ].join();
    };
    var twitterBtn = document.querySelector('.twitter');
    var text = encodeURIComponent('Go and check out this contest to win a free tour of Saint Malo ! #guidest');
    var shareUrl = 'https://twitter.com/intent/tweet?url=' + encodeURIComponent("https://voyages-corsaire.000webhostapp.com/") + '&text=' + text;
    twitterBtn.href = shareUrl; // 1

    twitterBtn.addEventListener('click', function(e) {
        console.log('click');
        e.preventDefault();
        var win = window.open(shareUrl, 'ShareOnTwitter', getWindowOptions());
        win.opener = null; // 2
    });
});
