const orderButtons = document.querySelectorAll('.cake-order');
orderButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    const content = `
      <div>
        <div class="modal-content">
          <span class="modalClose">&times;</span>
          <h2 class="modal-title">Замовити капкейки</h2>
          <form id="order-form">
            <label class="modal-forms" for="name">Ваше ім'я</label>
            <input class="modal-input" type="text" id="name" name="name" required>

            <label class="modal-forms" for="email">Номер телефону</label>
            <input class="modal-input" type="tel" pattern="[0-9]{10}" name="phone" minlength="5" required>

            <label class="modal-forms" for="product">Назва капкейку</label>
            <input class="modal-input" type="text" id="product" name="product" required>

            <label class="modal-forms" for="quantity">Кількість</label>
            <input class="modal-input" type="number" name="quantity" required>
            <label class="policy">
              <input type="checkbox" name="privacy-policy" required>
              Я погоджуюся з <a href="#" target="_blank">політикою конфіденційності</a>.
            </label>
            <button class="cake-order-modal" type="submit">Замовити</button>
          </form>
        </div>
      </div>
    `;
    const instanceModal = basicLightbox.create(content);

    document.addEventListener('keydown', function(event) {
      if (event.key === 'Escape') {
        instanceModal.close();
      }
    });

    instanceModal.show();

    const modalClose = instanceModal.element().querySelector('.modalClose');
    modalClose.addEventListener('click', function() {
      instanceModal.close();
    });

    const orderForm = instanceModal.element().querySelector('#order-form');
    orderForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const formData = new FormData(orderForm);
      const name = formData.get('name');
      const phone = formData.get('phone');
      const product = formData.get('product');
      const quantity = formData.get('quantity');

      if (!name || !phone || !product || !quantity) {
        Notiflix.Notify.warning('Будь ласка, заповніть всі поля форми!');
        return;
      }

      instanceModal.close();
      Notiflix.Notify.success('Замовлення пройшло успішно!🤩 Наш менеджер скоро зателефонує Вам для уточнення деталей замовлення!', {
      timeout: 9000
    });
    });
  });
});
