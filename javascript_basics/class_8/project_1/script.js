// Select the button and input elements
const colorButton = document.getElementById('colorButton');
const textInput = document.getElementById('textInput');

// Add an event listener to the button to change its color when clicked
colorButton.addEventListener('click', function() {
    // Toggle the button's background color
    if (colorButton.style.backgroundColor === 'red') {
        colorButton.style.backgroundColor = '#4CAF50';
    } else {
        colorButton.style.backgroundColor = 'red';
    }
});

// Add an event listener to the input to detect when the Enter key is pressed
textInput.addEventListener('keydown', function(event) {
    // Check if the Enter key was pressed (key code 13)
    if (event.key === 'Enter') {
        alert('You pressed Enter: ' + textInput.value);
        textInput.value = ''; // Clear the input field
    }
});
