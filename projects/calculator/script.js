const display = document.getElementById('display');

function appendToDisplay(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function calculate() {
  try {
    // Reemplazar algunos símbolos para que JS pueda evaluar correctamente
    let expression = display.value.replace(/√/g, 'Math.sqrt')
                                  .replace(/%/g, '/100');

    // Usar eval con cuidado para evaluar la expresión
    display.value = eval(expression);
  } catch {
    display.value = 'Error';
  }
}

function applyFunction(fn) {
  try {
    let currentValue = parseFloat(display.value);
    let result;

    switch (fn) {
      case 'sqrt':
        result = Math.sqrt(currentValue);
        break;
      case 'square':
        result = currentValue * currentValue;
        break;
      case 'reciprocal':
        result = 1 / currentValue;
        break;
      default:
        return;
    }

    display.value = result;
  } catch {
    display.value = 'Error';
  }
}

// Soporte para teclado
document.addEventListener('keydown', function(e) {
  const allowedKeys = '0123456789+-*/().%';

  if (allowedKeys.includes(e.key)) {
    appendToDisplay(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    display.value = display.value.slice(0, -1);
  } else if (e.key.toLowerCase() === 'c') {
    clearDisplay();
  }
});
