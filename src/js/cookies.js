// ===========================
// Project: Voyages-Corsaire
// File: cookies.js
// Author: Jb
// Date: 2019-03-14
// Description:
// ===========================

// Google analytics

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-53104721-4');

// Cookie Consent

window.cookieconsent.initialise({
    container: document.getElementById("content"),
    palette:{
        popup: {background: "#fff"},
        button: {background: "#aa0000"},
    },
    revokable:true,
    onStatusChange: function(status) {
        console.log(this.hasConsented() ?
            'enable cookies' : 'disable cookies');
    },
    law: {
        regionalLaw: false,
    },
    location: true,
});
