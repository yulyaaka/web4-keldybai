const list = document.getElementById('my-list');

list.addEventListener('click', event => {
    if (event.target.tagName === 'LI') {
        event.target.textContent = 'Нажато!';
        event.target.classList.add('clicked');
    }
});

document.getElementById('btn').addEventListener('click', () => {
    list.insertAdjacentHTML('beforeend', `<li>Элемент ${list.children.length + 1}</li>`);
});