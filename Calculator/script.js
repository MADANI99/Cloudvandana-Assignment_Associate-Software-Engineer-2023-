const display = document.getElementById('display');
const clearButton = document.getElementById('clear');
clearButton.addEventListener('click', function() {
    display.value = '';
});
document.getElementById('keypad').addEventListener('click', function(event) {
    if (event.target.classList.contains('button')) {
        const buttonValue = event.target.textContent;
        
        if (buttonValue === '=') {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Error';
            }
        } else {
            display.value += buttonValue;
        }
    }
});
