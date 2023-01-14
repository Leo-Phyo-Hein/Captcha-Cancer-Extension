// Function to create and display the captcha popup
function showCaptchaPopup() {

    // Generate a random string of alphabets and numbers
    var randomString = Math.random().toString(36).slice(-8);

    // Create the popup element
    var popup = document.createElement("div");
    popup.innerHTML = `Please enter the captcha ${randomString}: ` + "<input type='text' id='captcha-input'/>"
    popup.style.backgroundColor = "red";
    popup.style.padding = "20px";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.zIndex = "1000";
    
    // Add the popup to the page
    document.body.appendChild(popup);

    userInput = document.getElementById("captcha-input");

    if (userInput.value === randomString) {
        alert("CAPTCHA passed!");
    } else {
        alert("CAPTCHA failed. Please try again.");
    };
}

// Show the captcha popup every 10 seconds
// Will refresh and clear input field if never type quickly enough
setInterval(showCaptchaPopup, 10000);

