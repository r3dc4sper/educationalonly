const images = ['1.png', '2.png', '3.png','4.png', '5.png', '6.png','7.png', '8.png', '9.png','10.png', '11.png', '12.png', '13.png', '14.png', '15.png','16.png', '17.png', '18.png','19.png', '20.png', '21.png','22.png', '23.png', '24.png','25.png', '26.png', '27.png','28.png', '29.png', '30.png','31.png', '32.png', '33.png','34.png', '35.png', '36.png','37.png', '38.png', '39.png','40.png', '41.png', '42.png','43.png', '44.png', '45.png', /* Add all your image filenames here */];
let currentIndex = 0;

const flashcardImage = document.getElementById('flashcard-image');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function showImage(index) {
  flashcardImage.src = images[index];
}

prevButton.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
});

nextButton.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
});

showImage(currentIndex);
