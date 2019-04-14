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

// Page Loader
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
    var cta = $(".cta-wrapper");
    var form = $(".form-wrapper");
    cta.click(function () {
        var h = form.height();
        form.css("height", "0");
        cta.css("border-radius", "0");
        cta.css("max-width", "100%");
        form.removeClass("hidden");
        // form.css("margin-top", "10rem");
        form.animate({
            height: h
        }, 500, "linear");
        setTimeout(function () {
            $("#email").focus();
        }, 800);
    });

    //Social Media
    // TODO: Social media window size
    // - FB
    $(".facebook>a").click(function(){
        window.open("https://www.facebook.com/sharer/sharer.php?u="+window.location.href+"&t="+document.title, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=500,width=300');
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
