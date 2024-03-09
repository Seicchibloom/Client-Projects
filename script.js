var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (var i = 0; i < tablinks.length; i++) {
        tablinks[i].classList.remove("active-link");
    }
    for (var i = 0; i < tabcontents.length; i++) {
        tabcontents[i].classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


var sidemeu = document.getElementById("sidemenu");

function openmenu(){
    sidemeu.style.right = "0";
}
function closemenu(){
    sidemeu.style.right="-200px";
}
var aboutSection = document.getElementById('about');
var servicesSection = document.getElementById('services');
var portfolioSection = document.getElementById('portfolio');
var headerSection =document.getElementById('headertext');
headerSection.classList.add('animated');
var screenPosition = window.innerHeight;

window.addEventListener('scroll', function() {
    var aboutPosition = headerSection.getBoundingClientRect().top;
    var servicesPosition = servicesSection.getBoundingClientRect().top;
    var portfolioPosition = portfolioSection.getBoundingClientRect().top;
 

    // Check if the About section is completely out of view
    if (aboutPosition < screenPosition && aboutPosition + aboutSection.offsetHeight < 0) {
        aboutSection.classList.add('animated');
    } else {
        aboutSection.classList.remove('animated');
    }

    // Check if the Services section is completely out of view
    if (servicesPosition < screenPosition && servicesPosition + servicesSection.offsetHeight > 0) {
        servicesSection.classList.remove('animated');
    } else {
        servicesSection.classList.add('animated');
    }

    // Check if the Portfolio section is completely out of view
    if (portfolioPosition < screenPosition && portfolioPosition + portfolioSection.offsetHeight > 0) {
        portfolioSection.classList.remove('animated');
    } else {
        portfolioSection.classList.add('animated');
    }
});
