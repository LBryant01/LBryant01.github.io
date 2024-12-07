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
document.addEventListener("DOMContentLoaded", () => {
    const svg = document.querySelector("#svg"); // Reference the embedded SVG element
    const tooltip = document.createElement("div"); // Tooltip for displaying state names

    // Style the tooltip
    tooltip.style.position = "absolute";
    tooltip.style.backgroundColor = "rgba(0, 0, 0, 0.7)";
    tooltip.style.color = "#fff";
    tooltip.style.padding = "5px 10px";
    tooltip.style.borderRadius = "5px";
    tooltip.style.pointerEvents = "none";
    tooltip.style.display = "none";
    tooltip.style.fontSize = "12px";
    document.body.appendChild(tooltip); // Add the tooltip to the body

    // Check if the SVG is present
    if (svg) {
        const statePaths = svg.querySelectorAll("path[data-name]"); // Select all paths with the `data-name` attribute
        if (statePaths.length === 0) {
            console.error("No paths with a 'data-name' attribute found in the SVG.");
            return;
        }

        // Add event listeners for each state path
        statePaths.forEach((state) => {
            // Show tooltip on mouse enter
            state.addEventListener("mouseenter", (e) => {
                const stateName = state.getAttribute("data-name"); // Get the state name
                tooltip.textContent = stateName;
                tooltip.style.display = "block";
            });

            // Move tooltip with the mouse
            state.addEventListener("mousemove", (e) => {
                tooltip.style.left = `${e.pageX + 10}px`;
                tooltip.style.top = `${e.pageY + 10}px`;
            });

            // Hide tooltip on mouse leave
            state.addEventListener("mouseleave", () => {
                tooltip.style.display = "none";
            });

            // Navigate to the corresponding state page on click
            state.addEventListener("click", () => {
                const stateName = state.getAttribute("data-name"); // Get the state name
                if (stateName) {
                    const statePage = `States/${stateName.toLowerCase()}.html`; // Generate the page URL
                    window.location.href = statePage; // Redirect to the page
                } else {
                    console.error("State does not have a 'data-id' attribute.");
                }
            });
        });
    } else {
        console.error("SVG element with id 'svg' not found.");
    }
});

