document.addEventListener("DOMContentLoaded", () => {
  // Banner Slider
  const banner = document.getElementById("bannerSlider"),
    bannerImages = Array.from(banner.querySelectorAll("img[data-src]"))?.map(
      (item) => item.getAttribute("data-src")
    );

  if (banner) {
    new Swiper(banner, {
      loop: true,
      speed: 2000,
      parallax: true,
      watchSlidesProgress: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
        waitForTransition: true,
      },
      preloadImages: false,
      lazy: true,
      navigation: {
        nextEl: ".swiper-btn-next",
        prevEl: ".swiper-btn-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
          return `<img src="${bannerImages[index]}" class="${className} smooth" />`;
        },
      },
    });
  }
});
