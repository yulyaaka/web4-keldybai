const images = [
    "images_4.jpg",
    "images_0.jpg",
    "images_4.jpg"
];

let currentImageIndex = 0;

const imgElement = document.getElementById('image');
const button = document.getElementById('change-image-button');

button.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    imgElement.src = images[currentImageIndex];
});
