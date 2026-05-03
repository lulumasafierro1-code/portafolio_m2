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

const API_KEY = "TU_API_KEY_AQUI";

// Arica coords
const lat = -18.48;
const lon = -70.31;

// API actual
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=es`)
.then(res => res.json())
.then(data => {

  // humedad
  document.getElementById("humedad").innerText = data.main.humidity + "%";

  const clima = data.weather[0].main;

  // iconos dinámicos
  let icono = "☀️";

  if (clima.includes("Rain")) icono = "🌧️";
  if (clima.includes("Cloud")) icono = "☁️";

  document.getElementById("manana").innerHTML = `${icono} ${data.main.temp}°C`;
  document.getElementById("tarde").innerHTML = `${icono} ${data.main.temp + 2}°C`;
  document.getElementById("noche").innerHTML = `${icono} ${data.main.temp - 2}°C`;

  // animación
  if (clima.includes("Rain")) {
    document.querySelectorAll(".clima-card").forEach(el => {
      el.classList.add("lluvia");
    });
  }

});