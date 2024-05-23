document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('.btn');
    let currentInput = '';
    let operator = '';
    let firstValue = '';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = button.textContent;

            if (value === '=') {
                if (firstValue && operator && currentInput) {
                    const result = eval(`${firstValue}${operator}${currentInput}`);
                    display.value = result;
                    firstValue = result;
                    currentInput = '';
                    operator = '';
                }
            } else if (['+', '-', '*', '/'].includes(value)) {
                if (currentInput) {
                    firstValue = currentInput;
                    currentInput = '';
                }
                operator = value;
            } else {
                currentInput += value;
                display.value = currentInput;
            }
        });
    });
});
