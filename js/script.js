$(document).ready(function() {

    $(".content").hide().fadeIn(2000);
    
    // Hover effect
    $('#downloadButton').hover(
        function() { // Mouse enter
            $(this).addClass('hovered');
        }, 
        function() { // Mouse leave
            $(this).removeClass('hovered');
        }
    );

    // Click effect
    $('#downloadButton').click(function() {
        // Change button text to "Downloading..."
        $(this).text("Downloading...");

        // After a brief delay, simulate the download action and reset the button text
        setTimeout(() => {
            window.location.href = './files/resume.pdf'; // Trigger the download
            $(this).text("Download Resume"); // Reset the button text
        }, 1500); // The delay is set to 1.5 seconds (1500 milliseconds) for demonstration
    });
});