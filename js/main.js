document.addEventListener("DOMContentLoaded", () => {
  // Trigger LazyLoad
  const lazyLoadInstance = new LazyLoad({
    // Your custom settings go here
  });

  // Trigger AOS
  AOS.init({
    duration: 1000,
    offset: 60,
  });
});
