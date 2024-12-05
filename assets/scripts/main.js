// Get the dropdown menu by its ID
const dropdown = document.getElementById('states');

// Add an event listener for the 'change' event
dropdown.addEventListener('change', function () {
    // Get the value of the selected option
    const selectedValue = this.value;

    // If a valid value is selected, navigate to the corresponding URL
    if (selectedValue) {
        window.location.href = selectedValue;
    }
});
