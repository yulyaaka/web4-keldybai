let count = 0;

const counterValue = document.getElementById('value');
const incrementButton = document.getElementById('btn');

incrementButton.addEventListener('click', () => {
    count++; 
    counterValue.textContent = count; 
});
