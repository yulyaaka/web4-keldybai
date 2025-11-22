const ul = document.getElementById('my-list');
const input = document.getElementById('username');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.textContent = input.value;
        ul.appendChild(li);
        input.value = '';
    }
});