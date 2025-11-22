const ul = document.getElementById('list');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    const lastItem = ul.lastElementChild;
    if (lastItem) {
        ul.removeChild(lastItem);
    }
});