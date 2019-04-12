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
    content: {
        message:'Ce site web utilise des cookies.',
        link: 'En savoir plus',
        dismiss: 'Ok !'
    },
    palette:{
        popup: {background: "#fff"},
        button: {background: "#2BC016", text: "white"},
    },
    revokable:true,
    onStatusChange: function(status) {
        console.log(this.hasConsented() ?
            'enable cookies' : 'disable cookies');
    },
    law: {
        regionalLaw: false,
    },
    location: false
});
