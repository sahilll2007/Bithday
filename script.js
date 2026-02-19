// Function to handle the button click
function revealSurprise() {
    // Hide the welcome screen
    const welcomeScreen = document.getElementById('welcome-screen');
    welcomeScreen.style.opacity = '0';
    
    // Wait for the fade-out, then show the birthday screen
    setTimeout(() => {
        welcomeScreen.style.visibility = 'hidden';
        
        const birthdayScreen = document.getElementById('birthday-screen');
        birthdayScreen.style.visibility = 'visible';
        birthdayScreen.style.opacity = '1';
        
        // Start the butterflies!
        startButterflies();
    }, 800);
}

// Function to create a single butterfly
function createButterfly() {
    const butterfly = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    butterfly.setAttribute("class", "butterfly");
    
    const use = document.createElementNS("http://www.w3.org/2000/svg", "use");
    use.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#butterfly-shape");
    butterfly.appendChild(use);

    const startLeft = Math.random() * window.innerWidth;
    butterfly.style.left = startLeft + 'px';
    butterfly.style.bottom = '-50px'; 

    const size = Math.random() * 30 + 30; 
    butterfly.style.width = size + 'px';
    butterfly.style.height = size + 'px';

    const duration = Math.random() * 5 + 8; 
    butterfly.style.animation = `flutter ${duration}s linear forwards`;
    
    butterfly.style.transformOrigin = "center";
    
    document.body.appendChild(butterfly);

    setTimeout(() => {
        butterfly.remove();
    }, duration * 1000);
}

// Function to kick off the animation loop
function startButterflies() {
    // Create a butterfly every 600ms
    setInterval(createButterfly, 600);
    
    // Create a few immediately so the screen fills up fast
    for(let i=0; i<5; i++) {
        createButterfly();
    }
}