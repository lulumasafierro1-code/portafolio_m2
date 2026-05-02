// Solo para verificar carga
console.log("Navbar funcionando correctamente");

// Autoplay Carrousel
const myCarousel = document.querySelector('#carouselRegiones');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
  wrap: true
});
