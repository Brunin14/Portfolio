let currentImageIndex = 0;
let interval;

function startSlideshow(carrosselItem) {
    const images = carrosselItem.querySelectorAll('.carrossel-img');
    interval = setInterval(() => {
        images[currentImageIndex].style.opacity = 0;
        currentImageIndex = (currentImageIndex + 1) % images.length;
        images[currentImageIndex].style.opacity = 1;
    }, 1000); // Troca de imagem a cada 1 segundo
}

function stopSlideshow(carrosselItem) {
    clearInterval(interval);
    const images = carrosselItem.querySelectorAll('.carrossel-img');
    images[currentImageIndex].style.opacity = 0;
    currentImageIndex = 0;
    images[currentImageIndex].style.opacity = 1;
}
