const div = document.querySelector('.higlight');
const button = document.querySelector('button');

button.addEventListener('click', () => {
  div.classList.toggle('higlight');
});
