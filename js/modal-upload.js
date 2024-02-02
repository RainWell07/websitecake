const UploadPhotoButton = document.getElementById('upload-image');
UploadPhotoButton.addEventListener('click', function() {
  const content = `
  <div>
  <div class="modal-content-upload">
    <span class="closeUp">&times;</span>
    <h2 class="modal-title-photo">Завантажити фото</h2>
    <p class="modal-upload-span">Просто додай сюди фото, та обов'язков вкажи свій номер для зворотньої відповіді 😏</p>
    <form>
    <div class = "ask-question-div-input">
    <input class="number-askquestion-input" type="tel" pattern="[0-9]{10}" name="phone" minlength="5" placeholder= "Номер телефону" required>
    <input class="number-askquestion-input" type="text" id="name" name="name" placeholder = "Ваше ім'я" required>
    </div>
      <input  type="file" id="photo-upload" accept="image/*">
      <button class="photo-upload-modal" type="submit">Завантажити</button>
    </form>
  </div>
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

  const photoUploadForm = instance.element().querySelector('form');
  const photoUploadInput = photoUploadForm.querySelector('#photo-upload');
  const phoneInput = photoUploadForm.querySelector('input[name="phone"]');
  const photoUploadButton = photoUploadForm.querySelector('.photo-upload-modal');

  photoUploadButton.addEventListener('click', function(event) {
    event.preventDefault();

    const file = photoUploadInput.files[0];
    const phone = phoneInput.value;
    console.log(file, phone);

    if (file && phone) {
      instance.close()
      Notiflix.Notify.success('Ок 😉 , фото завантажене, вже дуже скоро ми Вам зателефонуємо!', {
      timeout: 9000
    });
    } else {
      Notiflix.Notify.failure('😰 От халепа, щось пішло не так! Спробуй додати фото та номер телефону ще раз!');
    }
  });
});
