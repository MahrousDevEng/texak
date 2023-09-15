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

  // Trigger LazyLoad
  const lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
  });

  // Trigger Particles
  if (window.innerWidth > 767) {
    particlesJS("particles-js", {
      particles: {
        number: {
          value: 2000,
          density: {
            enable: false,
            value_area: 800,
          },
        },
        color: {
          value: "#34a9bb",
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000",
          },
          polygon: {
            nb_sides: 5,
          },
          image: {
            src: "img/github.svg",
            width: 100,
            height: 100,
          },
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false,
          },
        },
        size: {
          value: 10,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false,
          },
        },
        line_linked: {
          enable: false,
          distance: 500,
          color: "#ffffff",
          opacity: 0.4,
          width: 2,
        },
        move: {
          enable: true,
          speed: 6,
          direction: "bottom",
          random: false,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200,
          },
        },
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
          resize: true,
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 0.5,
            },
          },
          bubble: {
            distance: 400,
            size: 4,
            duration: 0.3,
            opacity: 1,
            speed: 3,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
          push: {
            particles_nb: 4,
          },
          remove: {
            particles_nb: 2,
          },
        },
      },
      retina_detect: true,
    });
  }

  // Trigger AOS
  AOS.init({
    duration: 1000,
    offset: 60,
  });
});
