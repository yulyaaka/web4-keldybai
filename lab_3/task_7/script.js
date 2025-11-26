document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const message = document.getElementById('message');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  
  message.textContent = '';
  name.style.border = '';
  email.style.border = '';
    
  if (!name.value) {
    message.textContent = 'Ошибка: Заполните поле "Имя"';
    message.style.color = 'red';
    name.style.border = '2px solid red';
    return;
  }
    
  if (!email.value) {
    message.textContent = 'Ошибка: Заполните поле "Email"';
    message.style.color = 'red';
    email.style.border = '2px solid red';
    return;
  }
    
  message.textContent = 'Форма успешно отправлена!';
  message.style.color = 'green';
    
  const formData = new FormData(this);
  console.log('Данные формы:');
  for (let [key, value] of formData.entries()) {
    console.log(`${key}: ${value}`);
  }
});