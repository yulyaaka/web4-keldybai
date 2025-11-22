const button = document.getElementById('myButton');
const header = document.getElementById('myHeader');

button.addEventListener('click', function() {
  header.textContent = 'Заголовок изменен!';
});
