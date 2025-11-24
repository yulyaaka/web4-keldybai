const pElement = document.getElementById('text');
const selectElement = document.getElementById('color');
selectElement.addEventListener('change', () => {
    const selectedColor = selectElement.value;
    pElement.style.color = selectedColor;
});