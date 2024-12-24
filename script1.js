document.getElementById('actionButton').addEventListener('click', function() {
    showMessage();
});

function showMessage() {
    const messageElement = document.getElementById('message');
    messageElement.innerHTML = "<h2>Happy Birthday Oyshi!</h2><p>On this special day, I want to remind you how much you mean to me. Every moment with you is a treasure, and I feel incredibly lucky to have you in my life. May your day be filled with love, laughter, and unforgettable memories. Wishing you a year ahead as beautiful as your heart!</p>";
    
    // Display the message and apply the fade-in effect
    messageElement.style.display = 'block';
    messageElement.style.animation = 'fadeIn 2s forwards'; // Apply animation
}








