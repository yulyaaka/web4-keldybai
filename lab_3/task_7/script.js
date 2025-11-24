document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); 
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageDiv = document.getElementById('message');

  if (nameInput.value && emailInput.value) {
    const formData = {
      name: nameInput.value,
      email: emailInput.value
    };

    messageDiv.textContent = 'Форма успешно отправлена!';
    messageDiv.style.color = 'green';

    console.log('Данные формы:', formData);
  } 
//   else {
//     console.log('Пожалуйста, заполните все поля формы.');
//     messageDiv.textContent = 'Пожалуйста, заполните все поля формы.';
//     messageDiv.style.color = 'red';
//   }
});
