// ===================================
// Project: Voyages-Corsaire
// File: custom-javascript.js
// Author: Jb
// Date: 2019-03-05
// Description: Main JS file
// ===================================

var button = $(".cta-btn");
button.click(function () {
    delay(200);
    button.trigger("blur");
});
