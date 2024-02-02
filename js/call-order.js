const buttonFooter = document.querySelector('.footer-section-btn');
const phoneInput = document.querySelector('input[name="phone"]');
const checkbox = document.querySelector('input[name="privacy-policy"]');

buttonFooter.addEventListener('click', function(event) {
  event.preventDefault();

  if (phoneInput.checkValidity() && checkbox.checked) {
    Notiflix.Notify.success('Ваше замовлення вже взято в обробку!👍 Очікуйте на дзвінок нашого менеджера!', {
      timeout: 9000
    });
    phoneInput.value = '';
  } else {
    Notiflix.Notify.failure('Будь ласка🙏, заповніть всі обов\'язкові поля!');
  }
});
