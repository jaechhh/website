// Modify the JavaScript code to cycle through the images one by one
document.addEventListener("DOMContentLoaded", function () {
    const sliders = document.querySelectorAll(".slider");

    sliders.forEach(function (slider) {
        const images = slider.querySelectorAll(".slider-image");
        let currentImageIndex = 0;

        function showNextImage() {
            images[currentImageIndex].style.display = "none";
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].style.display = "block";
        }

        // Initially, display the first image
        images[currentImageIndex].style.display = "block";

        // Set up an interval to automatically switch images
        setInterval(showNextImage, 3000); // Change image every 3 seconds
		
		

    });
});

// JavaScript code for an attractive UI effect

// Function to generate a random color in hexadecimal format
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Get a reference to the button element
const myButton = document.createElement('button');
myButton.textContent = 'Change Color';
document.body.appendChild(myButton);

// Add a click event listener to the button
myButton.addEventListener('click', function() {
    // Generate a random background color
    const randomColor = getRandomColor();

    // Change the background color of the body gradually
    document.body.style.transition = 'background-color 0.5s';
    document.body.style.backgroundColor = randomColor;
});
