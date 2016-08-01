$(function () {
    // Add html in footerElement.html to footer elements in
    // the .html files where templateAddition.js is added
    $("footer").load("TemplateElements/footerTemplate.html");

    // Add html in navBarTemplate.html to .nav elements in
    // the .html files where templateAddition.js is added
    $(".nav").load("TemplateElements/navBarTemplate.html");
});