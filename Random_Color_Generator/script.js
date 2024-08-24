document.addEventListener("DOMContentLoaded", function () {
    var colorsContainer = document.getElementById("colorsContainer");
    var generateButton = document.getElementById("generateButton");
    // Function to generate a random color in hexadecimal format
    function generateRandomColor() {
        var letters = "0123456789ABCDEF";
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    // ----- Function to generate multiple random colors -----
    function generateMultipleColors(count) {
        var colors = [];
        for (var i = 0; i < count; i++) {
            colors.push(generateRandomColor());
        }
        return colors;
    }
    // ----- Function to update the UI with multiple colors -----
    function updateColorsDisplay() {
        var colors = generateMultipleColors(5); // Change the number to generate more or fewer colors
        colorsContainer.innerHTML = ''; // Clear the container first
        colors.forEach(function (color) {
            var colorDiv = document.createElement('div');
            colorDiv.className = 'color-display';
            colorDiv.style.backgroundColor = color;
            colorDiv.textContent = color;
            colorsContainer.appendChild(colorDiv);
        });
    }
    // ----- Event listener for the generate button ----- 
    generateButton.addEventListener("click", updateColorsDisplay);
    // ----- Initialize with multiple random colors ----- 
    updateColorsDisplay();
});
