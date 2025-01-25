let calcScreen = document.getElementById('calc-screen');

// Append value to the screen
function appendValue(value) {
  calcScreen.value += value;
}

// Clear the screen
function clearScreen() {
  calcScreen.value = '';
}

// Calculate the result
function calculateResult() {
  try {
    calcScreen.value = eval(calcScreen.value);
  } catch (error) {
    calcScreen.value = 'Error';
  }
}
