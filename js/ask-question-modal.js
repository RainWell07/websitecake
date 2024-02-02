const button = document.getElementById('my-button');
button.addEventListener('click', function() {
  const content = `
  <div class="modal-content-upload-ask">
    <span class="closeUp">&times;</span>
    <h2 class="modal-ask-question-title-photo">Задайте ваше питання</h2>
    <form>
      <div class = "ask-question-div-input">
      <input class="number-askquestion-input" type="tel" pattern="[0-9]{10}" name="phone" minlength="5" placeholder= "Номер телефону" required>
      <input class="number-askquestion-input" type="text" id="name" name="name" placeholder = "Ваше ім'я" required>
      </div>
      <textarea class = "ask-question-comment"  placeholder="Опишіть все так, як ви собі це уявляєте і я обов'язково Вам зателефоную для уточнення деталей 🙂"></textarea>
      <button class="question-upload-modal" type="submit">Завантажити</button>
    </form>
  </div>
  `;

  const instance = basicLightbox.create(content);
  
  document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      instance.close();
    }
  });
  
  instance.show();

  const modalAskClose = instance.element().querySelector('.closeUp');
  modalAskClose.addEventListener('click', function() {
    instance.close();
  });

  const form = instance.element().querySelector('form');
  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const phoneInput = form.querySelector('input[name="phone"]');
    const commentTextarea = form.querySelector('.ask-question-comment');

    if (phoneInput.validity.valid && commentTextarea.value) {
      instance.close();
      Notiflix.Notify.success('Oк 😙 Вікторія вже читає ваше питання та скоро Вам зателефонує!', {
      timeout: 9000
    });
    } else {
      Notiflix.Notify.failure('Будь ласка🙏, заповніть всі поля форми!');
    }
  });
});
