// main.js
const messages = {
    greetings: [
        "In the grand scheme of things,",
        "Remember this truth:",
        "As Marcus Aurelius once reflected,",
        "Consider this wisdom:",
        "With calm reflection,"
    ],
    mainDialogue: [
        "focus on what you can control, let go of what you cannot",
        "every obstacle is an opportunity for growth",
        "your strength lies in how you respond to challenges",
        "true happiness comes from within, not external circumstances",
        "discipline and patience are your greatest allies"
    ],
    closingPhrases: [
        "Face this day with courage.",
        "Accept what comes with grace.",
        "Stand firm in your principles.",
        "Choose wisdom over comfort.",
        "Embrace the present moment."
    ]
};

/**
 * Generates a random message from the message pools.
 * @returns {string} A random message from the message pools.
 */
function generateMessage() {
    // Select a random greeting from the greetings pool
    const greeting = messages.greetings[Math.floor(Math.random() * messages.greetings.length)];
    
    // Select a random main dialogue from the mainDialogue pool
    const main = messages.mainDialogue[Math.floor(Math.random() * messages.mainDialogue.length)];
    
    // Select a random closing phrase from the closingPhrases pool
    const closing = messages.closingPhrases[Math.floor(Math.random() * messages.closingPhrases.length)];
    
    // Return a message with a greeting, main dialogue, and closing phrase
    return `${greeting} ${main}. ${closing}`;
}

// Add a click event listener to the "generate" button
document.getElementById('generate').addEventListener('click', () => {
    // Get the message display element
    const messageDisplay = document.getElementById('message-display');
    
    // Set the opacity of the message display to 0 (invisible)
    messageDisplay.style.opacity = '0';
    
    // Wait for 300 milliseconds, then update the message display with a new message
    // and set the opacity to 1 (fully visible)
    setTimeout(() => {
        messageDisplay.textContent = generateMessage();
        messageDisplay.style.opacity = '1';
    }, 300);
});

/**
 * Add a typing effect to the message display.
 */
function addTypingEffect() {
    const messageDisplay = document.getElementById('message-display');

    // Set the opacity of the message display to 1 (fully visible)
    messageDisplay.style.opacity = '1';

    // Add a "typing" indicator
    messageDisplay.innerHTML = '<span class="typing">...</span>';
    
    // Wait a second, then set the text content of the message display
    // to a new message
    setTimeout(() => {
        messageDisplay.textContent = generateMessage();
    }, 1000);
}

