const form = document.querySelector('#form');

form.addEventListener('submit', function (evt) {
  evt.preventDefault();

  const formData = {
    name: form.querySelector('input[name="f-name"]').value,
    email: form.querySelector('input[name="email"]').value
  };

  const request = new XMLHttpRequest();

  request.addEventListener('load', function () {
    form.innerHTML = `
    <div class="response__body">
      <h2 class="response__title">Thank You!</h2>
      <p class="response__subtitle">you registered!</p>
    </div>
    <div class="form__bottom block response">
      <div class="form__login">Have an account? <span class="login-blue">Login</span></div>
    </div>
    `;
  });

  request.open('POST', '/#', false);
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
  request.send('name=' + encodeURIComponent(formData.name) + '&email=' + encodeURIComponent(formData.email));
});

