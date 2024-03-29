document.addEventListener("DOMContentLoaded", function() {
    const carousel = document.querySelector(".carousel-container");
    const images = carousel.querySelectorAll("img");
    const totalImages = images.length;
    let index = 0;

    function moveCarousel() {
        carousel.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextImage() {
        index++;
        if (index >= totalImages) {
            index = 0;
        }
        moveCarousel();
    }

    function prevImage() {
        index--;
        if (index < 0) {
            index = totalImages - 1;
        }
        moveCarousel();
    }

    setInterval(nextImage, 1000); // Cambia automáticamente a la siguiente imagen cada 3 segundos
});
