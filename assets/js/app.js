//WOW JS INIT
(function($) {
    new WOW().init();
})(jQuery);
//CUSTOMER REVIEW  SLIDER
var swiper = new Swiper(".customer-review", {

    loop: false,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});

// FOR CURRENT PAGE ACTIVE NAVBAR
$(function() {
    var url = window.location.href;
    url = url.substring(0, (url.indexOf("#") == -1) ? url.length : url.indexOf("#"));
    url = url.substring(0, (url.indexOf("?") == -1) ? url.length : url.indexOf("?"));
    url = url.substr(url.lastIndexOf("/") + 1);

    if (url == '') {
        url = 'index.html';
    }
    $('.menu-list').each(function() {
        var href = $(this).find('a').attr('href');
        if (url == href) {
            $(this).addClass('active');
        }
    });
});

// =========toggle icon=======
// Hamburger-menu
const hamburgerMenu = document.querySelector(".hamburger-menu");
const sideBar = document.querySelector(".side-bar");

function setSidebarOpen(isOpen) {
    sideBar.classList.toggle("active", isOpen);
    document.querySelector(".hamburger-menu .line-top").classList.toggle("current", isOpen);
    document.querySelector(".hamburger-menu .line-center").classList.toggle("current", isOpen);
    document.querySelector(".hamburger-menu .line-bottom").classList.toggle("current", isOpen);
}

hamburgerMenu.addEventListener("click", function(event) {
    event.stopPropagation();
    setSidebarOpen(!sideBar.classList.contains("active"));
});

document.addEventListener("click", function(event) {
    const isSidebarOpen = sideBar.classList.contains("active");
    const clickedInsideSidebar = sideBar.contains(event.target);
    const clickedHamburger = hamburgerMenu.contains(event.target);

    if (isSidebarOpen && !clickedInsideSidebar && !clickedHamburger) {
        setSidebarOpen(false);
    }
});

// ===========preloader=============
$(window).on('load', function() {
    $("#preloader").delay(600).fadeOut();
});

// ====================dark and light ============

// FOR TOGGLE SWITCH DARK & LIGHT THEME
const btn = document.querySelector(".night__mood");
const theme = document.querySelector("#change-mood");
const storedTheme = localStorage.getItem("theme");

if (storedTheme === "dark") {
    theme.href = "assets/css/dark.css";
} else {
    theme.href = "assets/css/style.css";
}

btn.addEventListener("click", function() {
    if (theme.getAttribute("href") === "assets/css/style.css") {
        theme.href = "assets/css/dark.css";
        localStorage.setItem("theme", "dark");
    } else {
        theme.href = "assets/css/style.css";
        localStorage.setItem("theme", "light");
    }
});
