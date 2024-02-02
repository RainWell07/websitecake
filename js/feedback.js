const reviewsContainer = document.getElementById('three-feedbacks-in-one');
const reviews = reviewsContainer.querySelectorAll('.feedback');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
let currentIndex = 0;

// Показуємо поточний відгук
function showReview() {
  reviews.forEach(review => review.classList.remove('active'));
  reviews[currentIndex].classList.add('active');
}

// Перехід до наступного відгуку
function nextReview() {
  currentIndex++;
  if (currentIndex >= reviews.length) {
    currentIndex = 0;
  }
  showReview();
}

// Перехід до попереднього відгуку
function prevReview() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = reviews.length - 1;
  }
  showReview();
}

// Додаємо обробники подій на кнопки
prevButton.addEventListener('click', prevReview);
nextButton.addEventListener('click', nextReview);

// Автоматично переходимо до наступного відгуку кожні 5 секунд
setTimeout(function() {
    nextReview();
    setInterval(nextReview, 19000);
  }, 0);
  // Показуємо початковий відгук
  showReview();
