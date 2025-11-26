const button = document.getElementById('toggleButton');
const element = document.getElementById('hiddenElement');

button.addEventListener('click', function() {
    if (element.style.display === 'none') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
});