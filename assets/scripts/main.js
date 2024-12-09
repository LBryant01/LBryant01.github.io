// Get the dropdown menu by its ID
const dropdown = document.getElementById('states');

// Add an event listener for the 'change' event
dropdown.addEventListener('change', function () {
    // Get the value of the selected option
    const selectedValue = this.value;

    // If a valid value is selected, navigate to the corresponding URL
    if (selectedValue) {
        const selectedOption = this.options[this.selectedIndex];
        selectedOption.style.backgroundColor = '#f4a261'; // Highlight selected option
        window.location.href = selectedValue;
    }
});

document.getElementById('map').addEventListener('load', function() {
    const svgDoc = this.contentDocument; // Access the SVG content
    const state1 = svgDoc.getElementById('state1'); // Example: Get a state by ID

    // Add event listeners or interactions
    state1.addEventListener('click', function() {
        alert('You clicked State 1!');
    });
});

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
  // Add click event listeners to all paths
document.querySelectorAll('path').forEach(function (path) {
    path.addEventListener('click', function () {
        const info = this.getAttribute('data-info');
        alert(info); // Replace this with your preferred display logic
    });
});
