window.addEventListener("scroll", () => {
  const headerPage = document.querySelector(".cabecalho");
  headerPage.classList.toggle("active-scroll", window.scrollY > 100);
});

const menuButton = document.querySelector(".menu-toggle");

menuButton.addEventListener("click", () => {
  const menu = document.querySelector(".menu");
  menu.classList.toggle("menu-active");
});

$(document).ready(function () {
  // window.innerWidth < 1100 &&
  $(".carousel-wrapper").slick({
    slidesToShow: 4,
    dots: true,
    arrows: false,
    centerMode: true,
    // centerPadding: '100px',
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 790,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 321,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
        },
      },
    ],
  });
});
