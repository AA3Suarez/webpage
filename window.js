window.onload = function() {
    // Check if the screen width is greater than 768 pixels (desktop)
    if (window.innerWidth > 768) {
        // Check if the user is on a mobile device
        if (/Mobi|Android/i.test(navigator.userAgent)) {
            // Alert the user and redirect them
            alert("You are using a mobile device. Please switch to mobile view.");
            // Redirect to a specific mobile page or reload the mobile version
            window.location.href = "mobile.html"; // Update this to your mobile URL if available
            // Or, if you just want to reload the page:
            // window.location.reload();
        }
    }
};

// Optional: Listen for window resize events to check if the user changes orientation
window.onresize = function() {
    if (window.innerWidth > 768 && /Mobi|Android/i.test(navigator.userAgent)) {
        alert("You are using a mobile device. Please switch to mobile view.");
        window.location.href = "mobile.html"; // Update this to your mobile URL
    }
};