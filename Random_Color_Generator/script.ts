document.addEventListener("DOMContentLoaded", () => {
    const colorsContainer = document.getElementById("colorsContainer") as HTMLDivElement;
    const generateButton = document.getElementById("generateButton") as HTMLButtonElement;

    // Function to generate a random color in hexadecimal format
    function generateRandomColor(): string {
        const letters = "0123456789ABCDEF";
        let color = "#";
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // ----- Function to generate multiple random colors -----
    function generateMultipleColors(count: number): string[] {
        const colors: string[] = [];
        for (let i = 0; i < count; i++) {
            colors.push(generateRandomColor());
        }
        return colors;
    }

    // ----- Function to update the UI with multiple colors -----
    function updateColorsDisplay() {
        const colors = generateMultipleColors(5); // Change the number to generate more or fewer colors
        colorsContainer.innerHTML = ''; // Clear the container first

        colors.forEach((color) => {
            const colorDiv = document.createElement('div');
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
