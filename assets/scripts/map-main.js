$("path, circle").hover(function(e) {
  $('#info-box').css('display','block');
  $('#info-box').html($(this).data('info'));
});

$("path, circle").mouseleave(function(e) {
  $('#info-box').css('display','none');
});

$(document).mousemove(function(e) {
  $('#info-box').css('top',e.pageY-$('#info-box').height()-30);
  $('#info-box').css('left',e.pageX-($('#info-box').width())/2);
}).mouseover();

var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
if(ios) {
  $('a').on('click touchend', function() {
    var link = $(this).attr('href');
    window.open(link,'_blank');
    return false;
  });
}




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
        const statePaths = svg.querySelectorAll("path[data-info]"); // Select all paths with the `data-info` attribute
        if (statePaths.length === 0) {
            console.error("No paths with a 'data-info' attribute found in the SVG.");
            return;
        }

        // Add event listeners for each state path
        statePaths.forEach((state) => {
            // Show tooltip on mouse enter
            state.addEventListener("mouseenter", (e) => {
                const stateName = state.getAttribute("data-info"); // Get the state name
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
                const stateName = state.getAttribute("data-info"); // Get the state name
                if (stateName) {
                    const statePage = `States/${stateName}.html`; // Generate the page URL
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
