$(document).ready(function () {
  $(".client-list").owlCarousel({
    items: 5,
    nav: true,
    dots: false,
    autoplay: true,
    loop: true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    // animateOut: true,
    responsive: {
      0: {
        items: 2,
        nav: false,
        loop: true,
      },
      578: {
        items: 3,
      },
      993: {
        items: 5,
      },
    },
  });
  $(".news-orther-list").owlCarousel({
    items: 3,
    nav: true,
    dots: false,
    mouseDrag: true,
    loop: true,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      579: {
        items: 3,
      },
    },
  });
  $(".BS-list-company").owlCarousel({
    items: 2,
    nav: true,
    dots: false,

    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      578: {
        items: 2,
      },
    },
  });
  $(".DIN-list-company").owlCarousel({
    items: 2,
    nav: true,
    dots: false,
    navText: [
      "<i class='fa-solid fa-angle-left'></i>",
      "<i class='fa-solid fa-angle-right'></i>",
    ],
    responsive: {
      0: {
        items: 1,
      },
      578: {
        items: 2,
      },
    },
  });
  $("a[href='#top']").click(function () {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  $(".questions-item-top").click(function () {
    $(this).addClass("active");
    console.log($(this));
    $(this).next().slideToggle();
  });
});

// var navMenu = document.getElementById("nav-menu").classList;
var tabBar = document.getElementById("tab");

let tabbarIcon = document.querySelector(".tabbar-icon");
let navMenu = document.getElementById("nav-menu");

tabbarIcon.addEventListener("click", function () {
  tabBar.classList.toggle("active");
  if (tabBar.classList[1] == "active") {
    navMenu.classList.add("active");
  } else {
    navMenu.classList.remove("active");
  }
});

var search = $("#input-search");
var iconSearch = $(".header-search-icon");
iconSearch.click(function () {
  search.toggle("active");
});
