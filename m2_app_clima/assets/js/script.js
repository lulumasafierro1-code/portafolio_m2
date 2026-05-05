// Solo para verificar carga
console.log("Navbar funcionando correctamente");

// Autoplay Carrousel
const myCarousel = document.querySelector('#carouselRegiones');
const carousel = new bootstrap.Carousel(myCarousel, {
  interval: 4000,
  wrap: true
});

console.log("Sección Main");

document.getElementById("btnTop").addEventListener("click", function() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});



